
import { useState } from 'react';
import './App.css';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';

import Router from './component/Router';


function UserProfile(props) {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <p>Age: {props.user.age}</p>
      <p>Email: {props.user.email}</p>
      
    </div>
  );
}


function Hello(props) {
  return (
    <h1>Hello World!!! {props.name} </h1>
  );
}

function StatePractice() {
  // eslint-disable-next-line 
  let [name,b] = useState("state만들기 ");
  return (
    <div>
      {name}
      <h4> { name[0] } <span>👍</span> 0 </h4>

    </div>
  );
}



function App() {
  const user = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
  };

  function Home() {
    return <h2>Home Page</h2>;
  }
  
  function About() {
    return <h2>About Page</h2>;
  }

  return (
    // eslint-disable-next-line
    <div className="App">

        {/* <UserProfile user={user} />
        <Hello name="minjun"/>
        <StatePractice/>
        <Comp1/>
        <Comp2/>
        <Comp3/> */}
      <Router/>
    </div>
  );
}

export default App;
