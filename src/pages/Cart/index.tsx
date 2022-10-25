import styled from 'styled-components';

import useCart from "store/cart";

import CartCard from './Card';

const GridContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-column: 1;
    grid-template-columns: repeat(1, 1fr);
`;

const Title = styled.h3`
    font-size: 24px;
    margin-bottom: 24px;
    font-family: Poppins-Bold, sans-serif;
`;

const CartPage = () => {
    const [cart] = useCart();

    return (
        <>
            <Title>
                Cart
            </Title>
            <GridContainer>
                {cart?.length > 0 && cart.map((item) => (
                    <CartCard key={item.id} item={item} />
                ))}
            </GridContainer>
        </>
    );
}

export default CartPage;