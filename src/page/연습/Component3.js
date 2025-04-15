import logo from '../../logo.svg';

export default function Component3() {
  return (
    <div className="App">

      <h1>3_div 나누기</h1>
      <h2>아래의 빨간색 영역을 Component로 나누어 보세요.</h2>
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
        <img src={logo} width="400" />
      </div>
      <div>
        <h1>귀여운 병아리</h1>
        <h4>작고 말랑말랑한 병아리</h4>
      </div>
    </div>
  )
}
