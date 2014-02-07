var bowerPath = '../bower_components/';

require.config({
  baseUrl: '/js',
  paths: {
    'react': bowerPath + 'react/react.min'
  }
});

require(['app'], function(App) {
  console.log('app, go!');
});