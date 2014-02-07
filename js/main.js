var bowerPath = '../bower_components/';

require.config({
  baseUrl: '/js',
  paths: {
    'react': bowerPath + 'react/react.min',
    'showdown': bowerPath + 'showdown/src/showdown'
  }
});

require(['app'], function(App) {
});