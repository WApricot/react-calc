
var RadioElement = React.createClass({

    render: function(){
        return (
            <div className='radio-element'>
                <input type="radio" id={this.props.id} name={this.props.name} data-type={this.props.datatype} onChange={this.props.function}/>
                <label htmlFor={this.props.id}>{this.props.fullName}</label>
            </div>
        )
    }
});
var RadiosGroup = React.createClass({
    render: function() {
        var keys=this.props.keys,
            typesData = Object.keys(keys),
            name = this.props.name,
            functionForItem = this.props.function;
        var elements = typesData.map(function(type, index){
            return <RadioElement type={keys[type]} datatype={type} fullName={keys[type]['name']} name={name} id={name + index} function={functionForItem}/>
        });
        return (
            <div className={this.props.name}>
                {elements}
            </div>
        )
    }
});
var CalcBlock = React.createClass({
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
            <div className='calc-form-inner'>
                <h4>Типы</h4>
                <RadiosGroup keys={data['sheet']} name={'type-block'} function={this.getCurrentType}/>
                <h4>Цвета</h4>
                <RadiosGroup keys={data['sheet'][this.state.type]['colors']} name={'colors-block'} />
            </div>
        )
    }

})
React.render(<CalcBlock />, document.getElementsByClassName('calc-form')[0]);