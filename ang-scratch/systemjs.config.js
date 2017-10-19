System.config({
  paths: {
  	// root path to all libraries we can import
    'npm:': '/node_modules/'
  },
  map: {

  	// dist of app
    app: 'dist/app',

    // all files we want to import
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    
    // ext libraries we want to import
    'core-js': 'npm:core-js',
    'zone.js': 'npm:zone.js',
    'rxjs': 'npm:rxjs',
    'tslib': 'npm:tslib/tslib.js'
  },

  // shortcuts so we can import without file type included
  packages: {
    'dist/app': {},
    'rxjs': {},
    'core-js': {},
    'zone.js': {}
  }
});