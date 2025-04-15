import logo from '../../logo.svg';
import dog from '../../dog.jpg';

export default function Component5() {
  return (
    <div className="App">

      <h1>5_div 나누기</h1>
      <h2>서로 다른 Component에게 이미지와 텍스트를 전달해보세요.</h2>
      <Component1 />
      <Component2 />

    </div>
  );
}

function Component1 () {
  return (
    <div style={{
      border : '3px solid red',
      padding: '5px',
      display: 'flex'
    }}>
      <div>
        <img src={logo} width="300" />
      </div>
      <div>
        <h1>귀여운 병아리</h1>
        <h4>작고 말랑말랑한 병아리</h4>
      </div>
    </div>
  )
}

function Component2 () {
  return (
    <div style={{
      border : '3px solid red',
      padding: '5px',
      display: 'flex'
    }}>
      <div>
        <img src={dog} width="200" />
      </div>
      <div>
        <h1>귀여운 강아지</h1>
        <h4>멍멍</h4>
      </div>
    </div>
  )
}
