
var RadioElement = React.createClass({displayName: "RadioElement",
    render: function(){
        return (
            React.createElement("div", {className: "radio-element"}, 
                React.createElement("input", {type: "radio", name: this.props.name}), 
                React.createElement("label", null, this.props.caption)
            )
        )
    }
});
var TypeBlock = React.createClass({displayName: "TypeBlock",
    render: function() {
        var typesData = Object.keys(data['sheet']);
        var elements = typesData.map(function(type){
            return React.createElement(RadioElement, {caption: type, name: 'type-block'})
        });
        return (
            React.createElement("div", {className: "photo-gallery"}, 
                elements
            )
        )
    }
});
React.render(React.createElement(TypeBlock, null), document.getElementById('type-block'));