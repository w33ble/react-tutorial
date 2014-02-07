define(function(require, exports, module){
  var React = require('react');

  return React.createClass({
    render: function() {
      return (
        React.DOM.div(
          {className: 'comment'},
          React.DOM.h1({
            className: 'commentAuthor',
            children: this.props.author
          }),
          this.props.children
        )
      );
    }
  });
});