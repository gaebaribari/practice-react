import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}


// 로딩중이다 라는것도 알려주고
//데이터 받으면 보여주고 네트워크 속도를 slow 3g 임의로 낮춰서 테스트하기 
// 에러가 뜬것도 알려주고 해야 패턴 흔한 패턴