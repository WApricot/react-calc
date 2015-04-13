
var RadioElement = React.createClass({displayName: "RadioElement",
    render: function(){
        return (
            React.createElement("div", {className: "radio-element"}, 
                React.createElement("input", {type: "radio"}), 
                React.createElement("label", null)
            )
        )
    }
});
var TypeBlock = React.createClass({displayName: "TypeBlock",
    render: function() {
        var typesData = data['sheet'];
        var elements = typesData.map(function(type){
            return React.createElement(RadioElement, null)
        });
        return (
            {elements}
            )

    }
});
React.render(React.createElement(TypeBlock, null), $('.type-block'));