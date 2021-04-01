// The root folder for this documentation category is `pages/api-docs`
//
// - A string refers to the name of a file
// - A "category" value refers to the name of a directory
// - All directories must have an "index.mdx" file to serve as
//   the landing page for the category

export default [
  'index',
  'libraries',
  'relatedtools',
  '------------',
  {
    category: 'secret',
    content: [
      'ad',
      'alicloud',
      'aws',
      'azure',
      'consul',
      'cubbyhole',
      {
        category: 'databases',
        content: [
          'cassandra',
          'couchbase',
          'elasticdb',
          'influxdb',
          'hanadb',
          'mongodb',
          'mongodbatlas',
          'mssql',
          'mysql-maria',
          'oracle',
          'postgresql',
          'redshift',
          'snowflake',
        ],
      },
      'gcp',
      'gcpkms',
      {
        category: 'key-management',
        content: [
          'azurekeyvault',
          'awskms',
        ],
      },
      'kmip',
      {
        category: 'kv',
        content: ['kv-v1', 'kv-v2'],
      },
      {
        category: 'identity',
        content: [
          'entity',
          'entity-alias',
          'group',
          'group-alias',
          'tokens',
          'lookup',
        ],
      },
      'mongodbatlas',
      'nomad',
      'openldap',
      'pki',
      'rabbitmq',
      'ssh',
      'terraform',
      'totp',
      'transform',
      'transit',
    ],
  },
  {
    category: 'auth',
    content: [
      'alicloud',
      'approle',
      'aws',
      'azure',
      'cf',
      'github',
      'gcp',
      'jwt',
      'kerberos',
      'kubernetes',
      'ldap',
      'oci',
      'okta',
      'radius',
      'cert',
      'token',
      'userpass',
      'app-id',
    ],
  },
  {
    category: 'system',
    content: [
      'audit',
      'audit-hash',
      'auth',
      'capabilities',
      'capabilities-accessor',
      'capabilities-self',
      'config-auditing',
      'config-control-group',
      'config-cors',
      'config-state',
      'config-ui',
      'control-group',
      'generate-root',
      'health',
      'host-info',
      'init',
      'internal-counters',
      'internal-specs-openapi',
      'internal-ui-feature',
      'internal-ui-mounts',
      'key-status',
      'leader',
      'leases',
      'license',
      'metrics',
      {
        category: 'mfa',
        content: ['duo', 'okta', 'pingid', 'totp'],
      },
      'monitor',
      'mounts',
      'namespaces',
      'plugins-reload-backend',
      'plugins-catalog',
      'policy',
      'policies',
      'policies-password',
      'pprof',
      'quotas-config',
      'rate-limit-quotas',
      'lease-count-quotas',
      'raw',
      'rekey',
      'rekey-recovery-key',
      'remount',
      {
        category: 'replication',
        content: ['replication-performance', 'replication-dr'],
      },
      'rotate',
      'rotate-config',
      'seal',
      'seal-status',
      'sealwrap-rewrap',
      'step-down',
      {
        category: 'storage',
        content: ['raft', 'raftautopilot', 'raftautosnapshots'],
      },
      'tools',
      'unseal',
      'wrapping-lookup',
      'wrapping-rewrap',
      'wrapping-unwrap',
      'wrapping-wrap',
    ],
  },
]
