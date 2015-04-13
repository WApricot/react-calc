
var RadioElement = React.createClass({displayName: "RadioElement",

    render: function(){
        return (
            React.createElement("div", {className: "radio-element"}, 
                React.createElement("input", {type: "radio", id: this.props.id, name: this.props.name, "data-type": this.props.datatype, onChange: this.props.function}), 
                React.createElement("label", {htmlFor: this.props.id}, this.props.fullName)
            )
        )
    }
});
var RadiosGroup = React.createClass({displayName: "RadiosGroup",
    render: function() {
        var keys=this.props.keys,
            typesData = Object.keys(keys),
            name = this.props.name,
            functionForItem = this.props.function;
        var elements = typesData.map(function(type, index){
            return React.createElement(RadioElement, {type: keys[type], datatype: type, fullName: keys[type]['name'], name: name, id: name + index, function: functionForItem})
        });
        return (
            React.createElement("div", {className: this.props.name}, 
                elements
            )
        )
    }
});
var CalcBlock = React.createClass({displayName: "CalcBlock",
    getCurrentType: function(type, element){
        console.log(123);
        this.setState({
            type: $('.type-block').find('input:checked').data('type')
        })
    },
    getInitialState: function() {
        return {
            type: "smart"
        };
    },
    render:function(){
        return(
            React.createElement("div", {className: "calc-form-inner"}, 
                React.createElement("h4", null, "Типы"), 
                React.createElement(RadiosGroup, {keys: data['sheet'], name: 'type-block', function: this.getCurrentType}), 
                React.createElement("h4", null, "Цвета"), 
                React.createElement(RadiosGroup, {keys: data['sheet'][this.state.type]['colors'], name: 'colors-block'})
            )
        )
    }

})
React.render(React.createElement(CalcBlock, null), document.getElementsByClassName('calc-form')[0]);