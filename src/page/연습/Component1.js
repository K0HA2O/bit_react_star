export default function Component1() {
  return (
    <div className="App">

      <h1>1_div 나누기</h1>
      <FirstDiv />
      <SecondDiv />
      <ThirdDiv />

    </div>
  );
}

function FirstDiv () {
  return (
    <div style={{
      backgroundColor : 'red',
      color: 'white'
    }}>
      <h1 style={{
        margin: '0'
      }}>FirstDiv</h1>
    </div>
  ) 
}

function SecondDiv () {
  return (
    <div style={{
      backgroundColor: 'blue',
      color: 'white'
    }}>
      <h1 style={{
        margin: '0'
      }}>SecondDiv</h1>
    </div>
  )
}

function ThirdDiv () {
  return (
    <div style={{
      backgroundColor: 'green',
      color: 'white'
    }}>
      <h1 style={{
        margin: '0'
      }}>ThirdDiv</h1>
    </div>
  )
}