import React, { useEffect, useState } from 'react';

export default function useProducts(showSale) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getProductsNetwork = async () => {
        setLoading(true);
        try {
            const response = await fetch(`data/${showSale ? 'sale_' : ''}products.json`)
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
    }, [showSale]);

    return [loading, error, products];

}