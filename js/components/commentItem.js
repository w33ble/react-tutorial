define(function(require, exports, module){
  var React = require('react');
  var Showdown = require('showdown');
  var converter = new Showdown.converter();

  return React.createClass({
    render: function() {
      var markup = converter.makeHtml(this.props.children.toString());
      return (
        React.DOM.div(
          {className: 'comment'},
          React.DOM.h1({
            className: 'commentAuthor',
            children: this.props.author
          }),
          React.DOM.span({
            dangerouslySetInnerHTML:{__html: markup}
          })
        )
      );
    }
  });
});