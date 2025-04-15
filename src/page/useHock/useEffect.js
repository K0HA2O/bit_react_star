import { useEffect, useState } from "react";

export default function UseEffect1() {

    const [카운트, set카운트] = useState(0);

    // useEffect(() => {
    //     alert('마운팅');
    // }, []);

    // useEffect(() => {
    //     console.log(카운트);
    // }, [카운트]);

    useEffect(() => {
        console.log('마운트');
        console.log('action, 실행 부분');

        return () => {
            console.log('언 마운트');
        }
    }, [카운트]);

    return (
        <div>
            <h1>Effect</h1>
            <input type="button" value="증가" 
                onClick={() => set카운트(카운트 + 1)} />{카운트}

        </div>
    )
}