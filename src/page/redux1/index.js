import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { useState } from 'react';

export default function Redux1() {
    return (
        <div>
            <h1>Redux</h1><hr />

            <Provider store={store}>
                <Input />
                <Output />
            </Provider>
            
        </div>
    )
}

function Input () {

    const dispatch = useDispatch();
    const [numInput, setNumInput] = useState(0);
    const [textInput, setTextInput] = useState('');

    return (
        <div>
            <h1>Input Area</h1>
            <input
                type="number"
                value={numInput}
                onChange={e => setNumInput(Number(e.target.value))}/>
            <input type="button" value="숫자전송" 
                onClick={() => {
                    dispatch({
                        type : 'numberUp',
                        num : numInput
                    });
                }}/><br />

            <input type="text" value={textInput}
                onChange={e => setTextInput(e.target.value)} />
            <input type="button" value="문자전송"
                onClick={() => {
                    dispatch({
                        type: "textUpdate",
                        text: textInput
                    });
                }} />
        </div>
    )
}

function Output () {

    const { num, text } = useSelector(state => state.data);

    return (
        <div>
            <h1>Output Area</h1>
            <p>Number : {num}</p>
            <p>Text : {text}</p>
        </div>
    )
}