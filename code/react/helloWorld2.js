/** @jsx React.DOM */
var mountNode = document.getElementById('example');
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(<HelloMessage name="Olli" />, mountNode);
