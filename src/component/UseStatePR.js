import React, { useState } from 'react';

export default function UseStatePR() {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    gender: "",
  });

  // 입력값 업데이트 함수
  const setName = (e) => {
    const { value } = e.target;
    setInput((prevInput) => ({
      ...prevInput, // 기존 상태를 복사
      name: value,  
    }));
  };

  const setBirth = (e) => {
    const {value} = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      birth : value,
    }));
  }

  return (
    <>
      <input
        value={input.name}
        placeholder="이름을 입력하세요"
        type="text"
        onChange={setName} // onChange 이벤트로 변경
      />
      <div></div>
      <input
        value={input.birth}
        placeholder="생일을 입력하세요"
        type="date"
        onChange={setBirth} // onChange 이벤트로 변경
      />

    
      <div>{input.name}</div>
      <div>{input.birth}</div>
    </>
  );
}
