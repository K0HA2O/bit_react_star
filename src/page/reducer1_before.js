import { useState, useReducer } from 'react';

export default function Resucer_before () {

    const [카운트, set카운트] = useState(0);
    // const [사용 번수명, 저장할 때 호출하는 함수명]
    // = useReducer([dispatch 호출하게 되면 처리하는 함수명]
    // , [무엇을 저장할 것인지, 초기값]
    // );
    const [count, dispatch1] = useReducer(sendReducer, 0);

    // reducer 받아서 처리하는 부분
    // action = text => json
    // action => type : 어떤 형태로 변형할 것인가?
    // 임의 값 => type에 따라서 어떻게 state에 적용할 것인가?
    function sendReducer (state, action) {
        if (action === 'up') {
            return state + 1;
        }
        else if (action === 'down') {
            if (state > 0)
                return state - 1;
            else
                return 0;
        }
        else if (action === 'reset') {
            return 0;
        }
        else if (action.type === 'input') {
            return action.val;
        }
    }

    return (
        <div>
            <h1>Reducer</h1>
            {count} <br />
            <input type="button" value="증가"
                onClick = {() => {
                    dispatch1('up');
                }} />
            <input type="button" value="감소"
                onClick = {() => {
                    dispatch1('down');
                }} />
            <input type="button" value="초기화"
                onClick = {() => {
                    dispatch1('reset');
                }} /><br />

            <input type="number" value={카운트}
                onChange={e => set카운트(e.target.value)} />
            <input type="button" value="전송"
                onClick={() => {
                    const num = 카운트;
                    const action = {type : 'input', val : num}
                    dispatch1(action);
                }} />
        </div>
    )
}