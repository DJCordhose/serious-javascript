/* @flow */

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){HelloMessage[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;HelloMessage.prototype=Object.create(____SuperProtoOf____Class0);HelloMessage.prototype.constructor=HelloMessage;HelloMessage.__superConstructor__=____Class0;
                  
    function HelloMessage(props) {"use strict";
        ____Class0.call(this,props);
        this.state = {greeting: this.props.greeting};
    }
    HelloMessage.prototype.reset=function() {"use strict";
        this.setState({greeting: ""});
        this.refs.in.getDOMNode().focus();
    };
    HelloMessage.prototype.updateModel=function(event) {"use strict";
        this.setState({greeting: event.target.value});
    };
    HelloMessage.prototype.render=function() {"use strict";
        return (
        React.createElement("div", null, 
            React.createElement("input", {ref: "in", 
                   onChange: this.updateModel.bind(this), 
                   value: this.state.greeting}), 
            React.createElement("p", null, this.state.greeting, ", World"), 
            React.createElement("button", {
                   onClick: this.reset.bind(this)}, "Clear")
        ));
    };

var mountNode = document.getElementById('example');
React.render(React.createElement(HelloMessage, {greeting: "Hello"}), mountNode);
