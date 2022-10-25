import styled from 'styled-components';

import { useEffect } from "react";

import useProductsList from "store/products";

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
    const [products, productsActions] = useProductsList();

    useEffect(() => {
        productsActions.read();
    }, []);

    return (
        <>
            <Title>
                Products
            </Title>
            <GridContainer>
                {products?.length > 0 && products.map((product) => (
                    <ProductCard key={product.id} item={product} />
                ))}
            </GridContainer>
        </>
    );
}

export default ProductsPage;