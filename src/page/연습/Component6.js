import logo from '../../logo.svg';
import dog from '../../dog.jpg';

export default function Component6() {

  const jsonData = [
    {
      title: "병아리",
      img: logo,
      description: "삐약삐약"
    },
    {
      title: "강아지",
      img: dog,
      description: "멍멍"
    }
  ]
  
  return (
    <div className="App">

      <h1>6_div 나누기</h1>
      <h2>JSON으로 데이터를 관리하여, map으로 데이터를 반복하여 표시해보세요.</h2>

      {jsonData.map((item, index) => (
        <FirstDiv title={item.title} img={item.img} description={item.description} />
      ))}
    </div>
  );
}

function FirstDiv (props) {
  return (
    <div style={{
      border : '3px solid red',
      display : 'flex'
    }}>
      <div>
        <img src={props.img} width="300" />
      </div>
      <div>
        <h1>{props.title}</h1>
        <h4>{props.description}</h4>
      </div>
    </div>
  )
}
