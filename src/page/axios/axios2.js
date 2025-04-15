import axios from 'axios';
import {useState} from 'react';

import 디테일 from '../../component/axios/axios2디테일';

export default function Axios2 () {

    const [지역리스트, set지역리스트] = useState([]);
    const [지역디테일, set지역디테일] = useState(null);
    const [임시이름저장, set임시이름저장] = useState('');

    const [지역입력, set지역입력] = useState(null);

    const handlerAreaList = () => {
        alert('지역 리스트 불러오기');

        axios.get('http://192.168.0.123:8080/api/area/list')
            .then(res => {
                console.log(res);
                set지역리스트(res.data.data);
            });
    }

    const handlerAreaDetail = idx => {
        axios.get('http://192.168.0.123:8080/api/area/findById',
            {params : {
                id : idx
            }}
        )
            .then(res => {
                console.log(res);
                set지역디테일(res.data.data);
                set임시이름저장(res.data.data.areaName);
            });
    }

    const handlerInput = () => {
        const obj = {areaName : 지역입력};
        axios.post('http://192.168.0.123:8080/api/area/regist',
            JSON.stringify(obj), {
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
        ).then(res => {
            console.log(res);
        })
    }

    return (
        <div>
            <h1>서버 호출하기</h1>

            <h4>지역 등록</h4>
            <input type="text" onChange={e => set지역입력(e.target.value)} />
            <input type="button" value="지역 입력" onClick={handlerInput} />

            <h4>지역 출력</h4>
            <input type="button" value="지역 리스트 불러오기"
                onClick={handlerAreaList} />
            
            {지역리스트.map((item, index) => (
                <div key={index}>
                    {item.idx} / {item.areaName}
                    <input type="button" value="param 전달하기" 
                        onClick={() => handlerAreaDetail(item.idx)} />
                </div>
            ))}

            {지역디테일 != null && <디테일 detail={임시이름저장}
            handlerReset={() => {
                set지역디테일(null);
                set임시이름저장('');
            }} />}
        </div>
    )
}