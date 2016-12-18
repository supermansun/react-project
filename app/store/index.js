import {createStore} from "redux";

const reducer = (state = {mainContent: 0, articleId: 0}, action) => {
    switch (action.type) {
        case 'detail':
            state.mainContent = 1;
            return state;
        case 'list':
            state.mainContent = 0;
            return state;
    }
}
const store = createStore(reducer);
export default store