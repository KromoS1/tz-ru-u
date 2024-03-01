module.exports = {
  extends: [
    '@react-native',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:boundaries/recommended',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {typescript: {}},
    'boundaries/elements': [
      {type: 'app', pattern: 'app/*'},
      {type: 'processes', pattern: 'processes/*'},
      {type: 'screens', pattern: 'screens/*'},
      {type: 'widgets', pattern: 'widgets/*'},
      {type: 'features', pattern: 'features/*'},
      {type: 'entities', pattern: 'entities/*'},
      {type: 'shared', pattern: 'shared/*'},
    ],
    'boundaries/ignore': ['**/*.test.*'],
  },
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {order: 'asc', caseInsensitive: true},
        'newlines-between': 'always',
        pathGroups: [
          {group: 'internal', position: 'after', pattern: '@/app/**'},
          {group: 'internal', position: 'after', pattern: '@/processes/**'},
          {group: 'internal', position: 'after', pattern: '@/screens/**'},
          {group: 'internal', position: 'after', pattern: '@/widgets/**'},
          {group: 'internal', position: 'after', pattern: '@/features/**'},
          {group: 'internal', position: 'after', pattern: '@/entities/**'},
          {group: 'internal', position: 'after', pattern: '@/shared/**'},
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            message:
              'Private imports are prohibited from @/app, use public imports instead',
            group: ['@/app/**'],
          },
          {
            message:
              'Private imports are prohibited from @/processes, use public imports instead',
            group: ['@/processes/*/**'],
          },
          {
            message:
              'Private imports are prohibited from @/screens, use public imports instead',
            group: ['@/screens/*/**'],
          },
          {
            message:
              'Private imports are prohibited from @/widgets, use public imports instead',
            group: ['@/widgets/*/**'],
          },
          {
            message:
              'Private imports are prohibited from @/features, use public imports instead',
            group: ['@/features/*/**'],
          },
          {
            message:
              'Private imports are prohibited from @/entities, use public imports instead',
            group: ['@/entities/*/**'],
          },
          {
            message:
              'Private imports are prohibited from @/shared, use public imports instead',
            group: ['@/shared/*/*/**'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/app'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/processes'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/screens'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/widgets'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/features'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/entities'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/shared'],
          },
        ],
      },
    ],
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          {
            from: 'app',
            allow: [
              'processes',
              'screens',
              'widgets',
              'features',
              'entities',
              'shared',
            ],
          },
          {
            from: 'processes',
            allow: ['screens', 'widgets', 'features', 'entities', 'shared'],
          },
          {
            from: 'screens',
            allow: ['widgets', 'features', 'entities', 'shared'],
          },
          {from: 'widgets', allow: ['features', 'entities', 'shared']},
          {from: 'features', allow: ['entities', 'shared']},
          {from: 'entities', allow: ['shared']},
          {from: 'shared', allow: ['shared']},
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.*', '**/*.scss'],
      rules: {'boundaries/element-types': 'off'},
    },
  ],
};
