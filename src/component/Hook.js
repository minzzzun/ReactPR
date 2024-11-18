import React, { useState } from 'react'; 
import "../component/Css.css"; 

export default function Hook() {

  const [a, setA] = useState("안녕");


  const msg = (obj1, event) => {
    alert(obj1 + "//" + event.target.id);
    console.log(obj1 + "//" + event.target.id);

    setA("안녕 버튼 클릭됨!");
  };

  return (
    <div>
      {/* 상태 값 출력 */}
      <p>{a}</p>

   
      <button id="btn" onClick={(e) => msg("haha", e)}>
        안녕 버튼
      </button>
    </div>
  );
}
