import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = () => setChecked((prev) => !prev);

  const getProductsNetwork = async () => {
    setLoading(true);
    try {
      const response = await fetch(`data/${checked ? 'sale_' : ''}products.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
          setProducts(data);
        });
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getProductsNetwork();
  }, [checked]);

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
      <input id='checkbox' type='checkbox' value={checked} onChange={handleChange} />
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