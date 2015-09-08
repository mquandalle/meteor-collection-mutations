Package.describe({
  summary: 'A solution for the allow/deny vs methods dilemma',
  name: 'mquandalle:collection-mutations',
  version: '0.1.0',
  documentation: null,
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.7');
  api.use('mongo');
  api.use('ecmascript');
  api.use('underscore');
  api.use('dburles:collection-helpers@1.0.0');
  api.addFiles('mutations.js');
});
