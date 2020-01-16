Package.describe({
    summary: 'Run functions before and after methods, mutate arguments and return values.',
    version: '1.0.0',
    name: 'jackjiang:method-hooks',
    git: 'https://github.com/baidan4855/meteor-method-hooks'
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@1.0');
    api.addFiles('method-hooks.js');
    api.export('MethodHooks');
});

Package.onTest(function (api) {
    api.use(['meteor', 'webapp', 'tinytest']);
    api.addFiles('method-hooks.js');
    api.addFiles('meteor-hooks-tests.js');
    api.export('MethodHooks');
});
