define(function(require, exports, module){
  var React = require('react');
  var CommentItem = require('components/commentItem');

  return React.createClass({
    render: function() {
      var commentNodes = this.props.comments.map(function(comment) {
        return CommentItem({author: comment.author}, comment.text)
      });

      return (
        React.DOM.div(
          {
            className: 'commentList'
          },
          commentNodes
        )
      );
    }
  });
});

