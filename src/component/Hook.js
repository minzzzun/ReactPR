import React, { useState } from 'react'; 
import "../component/Css.css"; 

export default function Hook() {

  const [a, setA] = useState("안녕");
  const [count, setCount] = useState(0);

  const msg = (obj1, event) => {
    // alert(obj1 + "//" + event.target.id);
    console.log(obj1 + "//" + event.target.id);

    setA("안녕 버튼 클릭됨!");
    setCount(count+1);
  };

  return (
    <div>

      <p>{a}</p>
      <div>{count}</div>
   
      <button id="btn" onClick={(e) => msg("haha", e)}>
        안녕 버튼
      </button>
    </div>
  );
}
