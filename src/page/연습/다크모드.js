import { useState } from 'react';

export default function 다크모드() {

  const [다크모드, set다크모드] = useState(true);

  return (
    <div className="App">

      <input type="button" value="다크모드" onClick={() => set다크모드(!다크모드)} />
      <DarkMode data={다크모드} />

    </div>
  );
}

function DarkMode({data}) {
  return (
    <div style={{
      width: '100%',
      height: '600px',
      backgroundColor: data ? 'white' : 'black',
      color : data ? 'black' : 'white'
    }}>
      <h1>Hello World</h1>
    </div>
  )
}
