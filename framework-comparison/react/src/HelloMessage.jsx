/* @flow */

// REACT with TypeScript style Flow types

class HelloMessage extends React.Component {
    state: string;
    constructor(props) {
        super(props);
        this.state = {greeting: this.props.greeting};
    }
    reset() {
        this.setState({greeting: ""});
        this.refs.in.getDOMNode().focus();
    }
    updateModel(event) {
        this.setState({greeting: event.target.value});
    }
    render() {
        return (
        <div>
            <input ref="in"
                   onChange={this.updateModel.bind(this)}
                   value={this.state.greeting} />
            <p>{this.state.greeting}, World</p>
            <button
                   onClick={this.reset.bind(this)}>Clear</button>
        </div>);
    }
}
var mountNode = document.getElementById('example');
React.render(<HelloMessage greeting="Hello" />, mountNode);
