import React from 'react'
import { useState } from 'react';

export default function UseStateInput() {
  const [name,setName] = useState("");
  const [birth,setBirth] = useState("");

  const onchageName = (e) => {
    setName(e.target.value);
  }

  return (
    <>
    <div>
      <input value={name}
      placeholder='입력하세요'
      onChange={onchageName}
      type='text'
      />
    </div>

  
  
    <div>{name}</div>
    </>
  )
}
