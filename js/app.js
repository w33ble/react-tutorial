define(function(require) {
  var React = require('react');
  var CommentBox = require('components/CommentBox');
  var D = React.DOM;
  var Comment = require('models/Comment');
  var comments = Comment.fetch();

  React.renderComponent(
    CommentBox({comments: comments}),
    document.querySelector('#example')
  );
});