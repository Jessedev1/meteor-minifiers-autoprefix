Package.describe({
  name: 'jessedev:minifiers-autoprefixer',
  version: '2.0.1',
  summary: 'Standard minifiers used with Meteor apps by default + css autoprefixer.',
  git: 'https://github.com/Jessedev1/meteor-minifiers-autoprefix.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "minifyStdCSS",
  use: [
    'minifier-css@2.0.0',
    'ecmascript@0.16.10'
  ],
  npmDependencies: {
    "source-map": "0.7.4",
    "lru-cache": "11.0.2",
    "postcss": "8.5.1",
    "autoprefixer": "10.4.20",
    "@babel/runtime": "7.26.7"
  },
  sources: [
    'plugin/minify-css.js'
  ]
});

Package.onUse(function(api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});

Package.onTest(function(api) {
});
