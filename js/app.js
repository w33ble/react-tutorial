define(function(require) {
  var React = require('react');
  var CommentBox = require('components/CommentBox');
  var D = React.DOM;

  React.renderComponent(
    CommentBox({}),
    document.querySelector('#example')
  );
});