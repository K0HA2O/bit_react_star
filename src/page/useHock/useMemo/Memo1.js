import { useState, useMemo } from 'react';

export default function Memo1() {

    const [수학점수, set수학점수] = useState(0);
    
    const get수학점수 = useMemo(() => {
        console.log('😊 수학 점수');
        return 수학점수;
    }, [수학점수]);

    const [영어점수, set영어점수] = useState(0);
    
    const get영어점수 = useMemo(() => {
        console.log('👿 영어 점수');
        return 영어점수;
    }, [영어점수]);
    
    return (
        <div>
            <h1>useMemo</h1>
            <input type="text" value={수학점수}
            onChange={e=> set수학점수(e.target.value)} />
            {get수학점수}<br/>
            <input type="text" value={영어점수}
            onChange={e=> set영어점수(e.target.value)} />
            {get영어점수}

        </div>
    )
}