import Child from './Child';
import { useState, useCallback } from 'react';

export default function Parent() {

    const [카운트, set카운트] = useState(0);

    const handlerRandom = useCallback(() => {
        console.log('함수 실행');
    }, []);

    return (
        <div>
            <h1>부모</h1>

            <input type="button" value="값 증가"
                onClick={() => set카운트(카운트 + 1)} /> {카운트}

            <Child onHandlerEvent={handlerRandom} />
        </div>
    )
}