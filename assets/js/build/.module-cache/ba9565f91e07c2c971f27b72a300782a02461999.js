
var RadioElement = React.createClass({displayName: "RadioElement",
    render: function(){
        return (
            React.createElement("div", {className: "radio-element"}, 
                React.createElement("input", {type: "radio", id: this.props.id, name: this.props.name, onChange: "console.log({this.props.id})"}), 
                React.createElement("label", {htmlFor: this.props.id}, this.props.caption)
            )
        )
    }
});
var TypeBlock = React.createClass({displayName: "TypeBlock",
    render: function() {
        var typesData = Object.keys(data['sheet']);
        var elements = typesData.map(function(type, index){
            return React.createElement(RadioElement, {caption: type, name: 'type-block', id: 'type-block' + index})
        });
        return (
            React.createElement("div", {className: "photo-gallery"}, 
                elements
            )
        )
    }
});
React.render(React.createElement(TypeBlock, null), document.getElementsByClassName('type-block')[0]);