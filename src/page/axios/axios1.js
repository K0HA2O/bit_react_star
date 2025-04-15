import axios from 'axios';
import { useState } from 'react';

export default function Axios1 () {

    const [리스트, set리스트] = useState([]);
    const [디테일, set디테일] = useState({});

    const handlerAxios1 = () => {
        console.log('handlerAxios1');

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                set리스트(response.data);
            });
    }

    const handlerDetail = (id) => {
        alert(id);
        const URL = 'https://jsonplaceholder.typicode.com/posts/' + id;
        axios.get(URL)
            .then(response => {
                console.log(response);
                set디테일(response.data);
            });
    }

    return (
        <div>
            <h1>AXIOS 1</h1>
            <input type="button" value="axios 호출1" onClick={handlerAxios1} />

            <h4>리스트 호출</h4>
            {리스트.map((item, index) => (
                <div key={index} onClick={() => handlerDetail(item.id)}>
                    {item.title}
                </div>
            ))}

            <div>
                <span>제목 : {디테일.title}</span>
                <span>내용 : {디테일.body}</span>
            </div>
        </div>
    )
}