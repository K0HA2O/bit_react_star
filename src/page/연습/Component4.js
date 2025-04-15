import logo from '../../logo.svg';

export default function Component4() {
  return (
    <div className="App">

      <h1>4_div 나누기</h1>
      <h2>Component를 연속으로 사용해 보세요.</h2>
      <Component />
      <Component />

    </div>
  );
}

function Component () {
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
