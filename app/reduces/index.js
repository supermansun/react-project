export default(state = 0,action)=>{
	switch(action.type){
		case "INCR":
		 	return state+1;
		 	break;
		case 'DECR':
			return state-1
			break;
		default:
			return state
	}
}