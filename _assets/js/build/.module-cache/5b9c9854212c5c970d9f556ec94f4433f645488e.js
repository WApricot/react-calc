
var RadioElement = React.createClass({displayName: "RadioElement",
    radioChecked: function(type, element) {
        if (!$(element).is('checked')) {
            console.log(type);
        }
    },
    render: function(){
        return (
            React.createElement("div", {className: "radio-element"}, 
                React.createElement("input", {type: "radio", id: this.props.id, name: this.props.name, onChange: this.radioChecked.bind(null, this.props.type)}), 
                React.createElement("label", {htmlFor: this.props.id}, this.props.fullName)
            )
        )
    }
});
var TypeBlock = React.createClass({displayName: "TypeBlock",
    render: function() {
        var typesData = Object.keys(data['sheet']);
        var elements = typesData.map(function(type, index){
            return React.createElement(RadioElement, {type: type, fullName: type['name'], name: 'type-block', id: 'type-block' + index})
        });
        return (
            React.createElement("div", {className: "radios-block"}, 
                elements
            )
        )
    }
});

var RadiosGroup = React.createClass({displayName: "RadiosGroup",
    render: function() {
        var keys=this.props.keys,
            typesData = Object.keys(keys),
            name = this.props.name;
        var elements = typesData.map(function(type, index){
            return React.createElement(RadioElement, {type: keys[type], fullName: keys[type]['name'], name: name, id: name + index})
        });
        return (
            React.createElement("div", {className: this.props.name}, 
                elements
            )
        )
    }
});

var CalcBlock = React.createClass({displayName: "CalcBlock",
    getCurrentType: function(){

    },
    render:function(){
        return(
            React.createElement("div", {className: "calc-form-inner"}, 
                React.createElement("h4", null, "Типы"), 
                React.createElement(RadiosGroup, {keys: data['sheet'], name: 'type-block'}), 
                React.createElement("h4", null, "Цвета"), 
                React.createElement(RadiosGroup, {keys: data['sheet'], name: 'colors-block'})
            )
        )
    }

})
React.render(React.createElement(CalcBlock, null), document.getElementsByClassName('calc-form')[0]);