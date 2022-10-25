import styled from 'styled-components';

import CartPage from 'pages/Cart';
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

const App = () => (
    <GridContainer>
        <GridItem>
            <ProductsPage />
        </GridItem>
        <GridItem>
            <CartPage />
        </GridItem>
        <GridItem>
            
        </GridItem>
    </GridContainer>
);

export default App;