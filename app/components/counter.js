import React,{Component,PropTypes}from 'react'
var Counter = React.createClass({
	propTypes:{
		value:PropTypes.number.isRequried,
		onIncr:PropTypes.func.isRequried,
		onDecr:PropTypes.func.isRequried
	},
	render:function(){
		const { value, onIncrement, onDecrement } = this.props
			return 
				<p>
					clicked:{value} times
					{"     "}
					<button onClick={onIncr}>+</button>
					{"     "}
					<button onclick={onDecr}>-</button>
					{"     "}
				</p>
	}
})
export default Counter