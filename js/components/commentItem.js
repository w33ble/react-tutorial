define(function(require, exports, module){
  var React = require('react');
  var Showdown = require('showdown');
  var converter = new Showdown.converter();

  return React.createClass({
    render: function() {
      return (
        React.DOM.div(
          {className: 'comment'},
          React.DOM.h1({
            className: 'commentAuthor',
            children: this.props.author
          }),
          converter.makeHtml(this.props.children.toString())
        )
      );
    }
  });
});