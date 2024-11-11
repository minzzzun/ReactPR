
import { useState } from 'react';
import './App.css';
import Comp1 from './Comp1';



function Hello(props) {
  return (
    <h1>Hello World!!! {props.name} </h1>
  );
}

function StatePractice() {
  let [name,b] = useState("state만들기 ");
  return (
    <div>
      {name}
      <h4> { name[0] } <span>👍</span> 0 </h4>

    </div>
  );
}



function App() {
  return (
    <div className="App">

        <Hello name="minjun"/>
        <StatePractice/>
        <Comp1/>
    </div>
  );
}

export default App;
