import { useEffect, useRef } from "react";
import styled from 'styled-components';

import useProductsList from "store/products";
import useInterval from 'utils/useInterval';

import ProductCard from './Card';

const GridContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-column: 2;
    grid-template-columns: repeat(2, 1fr);
`;

const Title = styled.h3`
    font-size: 24px;
    margin-bottom: 24px;
    font-family: Poppins-Bold, sans-serif;
`;

const ProductsPage = () => {
    const rerenderCount = useRef(0);
    const [products, productsActions] = useProductsList();

    useEffect(() => {
        productsActions.read();
    }, []);

    useInterval(() => {
        productsActions.inflation();
    }, 2000);

    rerenderCount.current++;

    return (
        <>
            <Title>
                Products
            </Title>
            <span style={{ color: 'red', fontSize: 10 }}>
                re-render: {rerenderCount.current}
            </span>
            <GridContainer>
                {products?.length > 0 && products.map((product) => (
                    <ProductCard key={product.id} item={product} />
                ))}
            </GridContainer>
        </>
    );
}

export default ProductsPage;