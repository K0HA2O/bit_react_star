import { combineReducers } from "redux";

// state 초기값 설정
const initState = {
    num : 0,
    text : 'text'
};

function dataReducer (state = initState, action) {
    switch (action.type) {
        case 'numberUp' :
            return { ...state, num: action.num};
        case 'textUpdate' :
            return { ...state, text: action.text};
        default :
            return state;
    }
}

const rootReducer = combineReducers({
    data : dataReducer // data - 임시 저장용
});

export default rootReducer;