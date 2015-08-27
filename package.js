Package.describe({
  name: 'q42:sass-t1000',
  version: '0.1.0',
  summary: 'A responsive grid system, based on SASS-mixins',
  git: 'git://github.com/Jpunt/sass-t1000.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['fourseven:scss@3.2.0'], 'client');
  api.addFiles(['T1000.scss'], 'server', {
    isAsset:true
  });
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('q42:sass-t1000');
});
