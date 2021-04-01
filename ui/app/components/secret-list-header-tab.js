/**
 * @module SecretListHeaderTab
 * SecretListHeaderTab component passes in properties that are used to check capabilities and either display or not display the component.
 * Use case was first for the Database Secret Engine, but should be used in future iterations as we don't generally want to show things the user does not
 * have access to
 *
 *
 * @example
 * ```js
 * <SecretListHeaderTab @displayName='Database' @id='database-2' @path='roles' @label='Roles' @tab='roles'/>
 * ```
 * @param {string} [displayName] - set on options-for-backend this sets a conditional to see if capabilities are being checked
 * @param {string} [id] - if fetching capabilities used for making the query url.  It is the name the user has assigned to the instance of the engine.
 * @param {string} [path] - set on options-for-backend this tells us the specifics of the URL the query should hit.
 * @param {string} label - The name displayed on the tab.   Set on the options-for-backend.
 * @param {string} [tab] - The name of the tab.  Set on the options-for-backend.
 *
 */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SecretListHeaderTab extends Component {
  @service store;
  @tracked dontShowTab;
  constructor() {
    super(...arguments);
    this.fetchCapabilities();
  }

  pathQuery(backend, path) {
    return {
      id: `${backend}/${path}/`,
    };
  }

  async fetchCapabilities() {
    let capabilitiesArray = ['canList', 'canCreate', 'canUpdate'];
    let checkCapabilities = function(object) {
      let array = [];
      // we only want to look at the canList, canCreate and canUpdate on the capabilities record
      capabilitiesArray.forEach(item => {
        array.push(object[item]);
      });
      return array;
    };
    let checker = arr => arr.every(item => !item); // same things as listing every item as !item && !item, etc.
    // For now only check capabilities for the Database Secrets Engine
    if (this.args.displayName === 'Database') {
      let peekRecordRoles = this.store.peekRecord('capabilities', 'database/roles/');
      let peekRecordStaticRoles = this.store.peekRecord('capabilities', 'database/static-roles/');
      let peekRecordConnections = this.store.peekRecord('capabilities', 'database/config/');
      // peekRecord if the capabilities store data is there for the connections (config) and roles model
      if (
        (peekRecordRoles && this.args.path === 'roles') ||
        (peekRecordStaticRoles && this.args.path === 'roles')
      ) {
        let roles = checker(checkCapabilities(peekRecordRoles));
        let staticRoles = checker(checkCapabilities(peekRecordStaticRoles));

        this.dontShowTab = roles && staticRoles;
        return;
      }
      if (peekRecordConnections && this.args.path === 'config') {
        this.dontShowTab = checker(checkCapabilities(peekRecordConnections));
        return;
      }
      // otherwise queryRecord and create an instance on the capabilities.
      let response = await this.store.queryRecord(
        'capabilities',
        this.pathQuery(this.args.id, this.args.path)
      );
      this.dontShowTab = checker(checkCapabilities(response));
    }
  }
}
