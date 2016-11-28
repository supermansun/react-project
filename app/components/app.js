import React,{Component} from 'react';
import {createStore} from "redux";
import ReactDOM from "react-dom";
import Counter from './counter'
import counter from '../reduces/index'
const store = createStore(counter);

class App extends Component{
	render (){
		return(
				<Counter
					value={store.getState()}
					onIncr = {()=>store.dispatch({type:'INCR'})}
					onDecr ={()=>store.dispatch({type:'DECR'})}	
				/>
			)
	}
}
export default App;
