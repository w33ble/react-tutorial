define(function(require, exports, module) {
  var React = require('react');
  var CommentList = require('components/commentList');
  var CommentForm = require('components/commentForm');

  return React.createClass({
    render: function() {
      return (
        React.DOM.div(
          {className: 'commentBox'},
          React.DOM.h1(null, 'Comments'),
          CommentList(),
          CommentForm()
        )
      );
    }
  });
});
