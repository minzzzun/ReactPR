import { useState } from 'react';

// 커스텀 훅 정의
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  // count를 증가시키는 함수
  function increment() {
    setCount(count + 1);
  }

  // count를 감소시키는 함수
  function decrement() {
    setCount(count - 1);
  }

  // count를 리셋하는 함수
  function reset() {
    setCount(initialValue);
  }

  // 현재 count와 관련된 값을 반환하는 함수
  function getCount() {
    return count;
  }

  return {
    count,
    increment,
    decrement,
    reset,
    getCount,
  };
}

// 커스텀 훅 사용 예제
function CustomHook() {
  const counter = useCounter(0);

  return (
    <div>
      <p>Count: {counter.count}</p>
      <button onClick={counter.increment}>증가</button>
      <button onClick={counter.decrement}>감소</button>
      <button onClick={counter.reset}>리셋</button>
    </div>
  );
}

export default CustomHook;