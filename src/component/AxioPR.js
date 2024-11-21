import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AxioPR() {
  const [tempList, setTempList] = useState([]); // 초기 상태를 빈 배열로 설정

  useEffect(() => {
    const getText = async () => {
      try {
        const response = await axios.get("https://672cc4affd89797156401d7c.mockapi.io/book");
        console.log(response.data); // 응답 데이터 출력
        setTempList(response.data); // 상태 업데이트
      } catch (error) {
        console.error(error); // 오류 처리
      }
    };

    getText(); // 데이터 가져오기 함수 호출
  }, []); // 빈 의존성 배열로 컴포넌트 마운트 시 한 번만 실행

  return (
    <div>
      {tempList.length > 0 ? (
        tempList.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Year: {book.year}</p>
            <p>Count: {book.count}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p> // 데이터가 로드되기 전 로딩 표시
      )}
    </div>
  );
}
