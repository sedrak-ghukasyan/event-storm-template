import styled from 'styled-components';

import CartPage from 'pages/Cart';
import LoggerPage from 'pages/Logger';
import ProductsPage from 'pages/Products';

import './App.css';

const GridContainer = styled.div`
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(3, 1fr);
    padding: 24px 18px;
    grid-column: 3;
`;
const GridItem = styled.div`
    width: 100%;
`;

const App = () => {
    return (
        <GridContainer>
            <GridItem>
                <ProductsPage />
            </GridItem>
            <GridItem>
                <CartPage />
            </GridItem>
            <GridItem style={{ maxWidth: 400 }}>
                <LoggerPage />
            </GridItem>
        </GridContainer>
    );
}

export default App;