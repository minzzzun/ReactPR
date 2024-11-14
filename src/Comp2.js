import React from 'react'

function Car(props) {
  return (
  <li>I am a { props.brand }</li>
  );
 }

 function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
  <div>
    <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car,index) => <Car key={index} brand={car} />)}
        
      </ul>
  </div>
  );
 }

function Test(){
  const array1 = [1, 4, 9, 16]; 
  const map1 = array1.map((x) => x * 2); 
  console.log(map1); 
  return (
    <>
      {array1.map((each, index) => (
      <div key={index}>{each}</div>
    ))}
      array1 출력
    </>
  )
}



export default function Comp2() {
  return (
    <div>

      <Test/>
      <Garage/>
    </div>
  );
}
