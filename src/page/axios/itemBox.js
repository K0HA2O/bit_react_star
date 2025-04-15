import axios from 'axios';
import { useState, useEffect } from 'react';
import '../../itemBox.css';

export default function ItemBox () {

    const [이름입력, set이름입력] = useState('');
    const [가격입력, set가격입력] = useState('');
    const [카테고리, set카테고리] = useState('');
    const [아이템리스트, set아이템리스트] = useState([]);
    const [검색입력, set검색입력] = useState('');
    const [아이템정보, set아이템정보] = useState(null);

    useEffect(() => {
        fetchItemList();
    }, []);

    const fetchItemList = () => {
        axios.get('http://192.168.0.123:8080/api/item/list')
            .then(res => {
                console.log(res);
                set아이템리스트(res.data.data);
            })
            .catch(err => {
                console.error("아이템 리스트를 불러오기 실패 : ", err);
            });
    }

    const handlerAddItem = () => {
        const obj = {name : 이름입력, price : 가격입력, categoryId : 카테고리};
        axios.post('http://192.168.0.123:8080/api/item/regist',
            JSON.stringify(obj), {
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
        ).then(res => {
            console.log(res);
            fetchItemList();

            set이름입력('');
            set가격입력('');
            set카테고리('');
        })
    }

    const handlerSearch = () => {
        axios.get('http://192.168.0.123:8080/api/item/findByName', {
            params : {name : 검색입력}
        }).then(res => {
            console.log(res.data);
            set아이템리스트(res.data.data)
        })
    }

    const handlerFind = idx => {
        axios.get('http://192.168.0.123:8080/api/item/find',
            {
                params : {itemIdx : idx}
            }
        ).then (res => {
            console.log(res.data.data);
            set아이템정보(res.data.data);
        })
    }

    const handlerLike = idx => {
        axios.get('http://192.168.0.123:8080/api/item/good',
            {
                params : {itemIdx : idx}
            }
        ).then (res => {
            console.log(res.data.data);
            fetchItemList();
        })
    }
    
    return (
        <div>
            <h1>아이템 박스</h1>

            <div className='main-container'>
                <input type="text" value={이름입력} placeholder='이름' className="common-input" onChange={e => set이름입력(e.target.value)} />
                <input type="text" value={가격입력} placeholder='가격' className="common-input" onChange={e => set가격입력(e.target.value)} />
                <select value={카테고리} className="common-input" onChange={e => set카테고리(e.target.value)}>
                    <option value="1">도서</option>
                    <option value="2">전자</option>
                    <option value="3">생활</option>
                </select>

                <input type="button" className="input-btn" value="추가"
                    onClick={handlerAddItem} />
            </div>

            <div>
                <input type="text" placeholder='검색어를 입력하세요' className="search-input" onChange={e => set검색입력(e.target.value)} />

                <input type="button" className="search-btn" value="검색"
                    onClick={handlerSearch} />
            </div><br />

            <div className="itemList-container">
                {Array.isArray(아이템리스트) ? (
                    아이템리스트.map((item, index) => (
                        <div key={index} className="itemList">
                            <h3 className="item-name" onClick={() => handlerFind(item.itemIdx)}>{item.name}</h3>
                            <h4 className="item-price">{item.price}원</h4>
                            <h4 className="item-likes" onClick={() => handlerLike(item.itemIdx)}>좋아요 {item.good}</h4>
                        </div>
                    ))
                ) : (
                    <p>아이템을 불러올 수 없습니다.</p>
                )}
            </div>

            {아이템정보 != null && <상세정보 detail={아이템정보}
                handlerReset={() => {
                    set아이템정보(null);
                }} />}

        </div>
    )
}

function 상세정보 (props) {
    return (
        <div>
            <div className='detail-background'
                onClick={() => props.handlerReset()}>

                <div className='detail-container'>
                    <div>
                        <span className='detail-name'>{props.detail.name}</span>
                    </div>
                    <div style={{
                        marginTop: '15px'
                    }}>
                        <span style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: 'gray'
                        }}>{props.detail.categoryName}</span>
                    </div>
                    <div style={{
                        marginTop: '28px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'end',
                        height: '50%'
                    }}>
                        <span className='detail-good'>좋아요 {props.detail.good}개</span>
                        <span className='detail-price'>{props.detail.price}원</span>
                    </div>
                </div>
            </div>
        </div>
    )
}