
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
            React.createElement("div", {className: "photo-gallery"}, 
                elements
            )
        )
    }
});
var CalcBlock = React.createClass({displayName: "CalcBlock",
    render:function(){
        return(
            React.createElement("div", {className: "calc-form-inner"}, 
                React.createElement("h4", null, "Типы"), 
                React.createElement(TypeBlock, null), 
                React.createElement("h4", null, "Цвета"), 
                React.createElement(TypeBlock, null)
            )
        )
    }

})
React.render(React.createElement(CalcBlock, null), document.getElementsByClassName('calc-form')[0]);