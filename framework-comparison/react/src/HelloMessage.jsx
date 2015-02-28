class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {model: this.props.greeting};
    }
    updateModel(event) {
        this.setState({model: event.target.value});
    }
    reset() {
        this.setState({model: ""});
        this.refs.in.getDOMNode().focus();
    }
    render() {
        return (
        <div>
            <input ref="in" onChange={this.updateModel.bind(this)}
                    value={this.state.model} />
            <p>{this.state.model}, World</p>
            <input type="button" value="Clear"
                    onClick={this.reset.bind(this)} />
        </div>);
    }
}
