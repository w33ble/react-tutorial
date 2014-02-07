define(function(require, exports, module){
  var React = require('react');
  var Comment = require('components/commentItem');

  return React.createClass({
    render: function() {
      return (
        React.DOM.div(
          {
            className: 'commentList'
          },
          Comment({author:'Pete Hunt'}, 'I `make` the scripts'),
          Comment({author:'w33ble'}, 'I *use* the scripts')
        )
      );
    }
  });
});

