export default function Component2() {
  return (
    <div className="App">

      <h1>2_div나누기</h1>
      <FirstDiv />
      <div style={{
        display: 'flex'
      }}>
        <SecondDiv />
        <ThirdDiv />
      </div>

    </div>
  );
}

function FirstDiv () {
  return (
    <div style={{
      backgroundColor: 'red',
      color: 'white',
      width: '100%'
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
      color: 'white',
      width: '50%'
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
      color: 'white',
      width: '50%'
    }}>
      <h1 style={{
        margin: '0'
      }}>ThirdDiv</h1>
    </div>
  )
}
