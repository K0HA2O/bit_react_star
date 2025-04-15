import { useState, useReducer } from 'react';

export default function Resucer1 () {

    const [카운트, set카운트] = useState(0);
    // const [사용 번수명, 저장할 때 호출하는 함수명]
    // = useReducer([dispatch 호출하게 되면 처리하는 함수명]
    // , [무엇을 저장할 것인지, 초기값]
    // );
    const [count, dispatch1] = useReducer(sendReducer, 0);

    // reducer 받아서 처리하는 부분
    function sendReducer (state, action) {
        if (action === 'up') {
            return state + 1;
        }
        else if (action === 'down') {
            return state - 1;
        }
        else if (action === 'reset') {
            return 0;
        }
    }

    return (
        <div>
            <h1>Reducer</h1>
            {count} <br />
            <input type="button" value="증가"
                onClick = {() => {
                    set카운트(카운트 + 1);
                    dispatch1('up');
                }} />
            <input type="button" value="감소"
                onClick = {() => {
                    dispatch1('down');
                }} />
            <input type="button" value="초기화"
                onClick = {() => {
                    dispatch1('reset');
                }} />
        </div>
    )
}