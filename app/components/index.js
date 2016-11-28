import React,{Component} from 'react';
// import App from './app';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider,connect} from 'react-redux';

// ReactDOM.render(<App/>,document.getElementById("app"));

const Counter = React.createClass({
	render(){
		const {value,onIncrement,onDecrement} = this.props
		return(
				<div>
				  <h1>{value}</h1>
				  <button onClick={onIncrement}>+</button>
				  <button onClick={onDecrement}>-</button>
			  	</div>
		  	)
		}
})
function mapStateToProps(state){
	return {
		value:state.count
	}
}
function mapDispatchTpProps(dispatch){
	return{
		onIncrement:()=>dispatch({type:'increse'}),
		onDecrement:()=>dispatch({type:'decrese'})
	}
}


const reducer = (state = { count:0}, action) => {
	const count = state.count
  switch (action.type) {
    case 'increse': return {count:count + 1};break;
    case 'decrese': return {count:count - 1};break;
    default: return state;
  }
};

const store = createStore(reducer);

const App = connect(
	mapStateToProps,
	mapDispatchTpProps
)(Counter)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
	)
// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() => store.dispatch({type: 'INCREMENT'})}
//       onDecrement={() => store.dispatch({type: 'DECREMENT'})}
//     />,
//     document.getElementById('app')
//   );
// };

// render();
// store.subscribe(render);