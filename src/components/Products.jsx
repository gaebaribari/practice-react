import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  
  const  [loading, error, products] = useProducts(checked);
  const handleChange = () => setChecked((prev) => !prev);

  if (error) return <ErrorPage />
  if (loading) return <Loading />
  return (
    <>
      <div><ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul></div>
      <input id='checkbox' type='checkbox' checked={checked} onChange={handleChange} />
      <label htmlFor="checkbox">세일 제품 보여주기</label>
    </>
  );
}

function Loading() {
  return (
    <span>로딩중입니다</span>
  );
}

function ErrorPage() {
  return (
    <span>에러 🤬</span>
  );
}