define(function(require, exports, module){
  var React = require('react');

  return React.createClass({
    render: function() {
      return (
        React.DOM.div({
          className: 'commentList',
          children: 'I are an commentlist'
        })
      );
    }
  });
});

