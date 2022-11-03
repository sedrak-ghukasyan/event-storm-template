import { memo } from 'react';

import styled from 'styled-components';

import useCart from 'store/cart';
import { TCartItem } from 'store/types';
import useProductsItem from 'store/products/item';

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border: 1px solid black;
    padding: 16px;
`;

const Name = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    margin-top: 8px;
`;

const Image = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center center;
    background-color: #e7e9ea;
    border: 1px solid black;
`;

const Price = styled.b`
    font-size: 18px;
    font-weight: bold;
`;

const Content = styled.div`
    flex: 1;
    padding: 0px 16px;
`;

const AddToCardButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: #fff;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    right: -10px;
    bottom: -10px;
    border: 1px solid black;
    background-position: center;
    background-size: cover;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImIiPgogICA8cGF0aCBkPSJtMTQ3IDM0NmgzMzV2MjY2Ljc5aC0zMzV6Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjg5IDM0NmgzMjMuNzl2MjY2Ljc5aC0zMjMuNzl6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNiKSI+CiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoNC43MzU4IDAgMCA0LjczNTggMTM5LjIxIDEzOS4yMSkiIGQ9Im00NCA3OWMwIDMuODY2LTMuMTMzNSA3LjAwMDQtNi45OTk1IDcuMDAwNHMtNy4wMDA0LTMuMTM0NC03LjAwMDQtNy4wMDA0YzAtMy44NjYgMy4xMzQ0LTcuMDAwNCA3LjAwMDQtNy4wMDA0czYuOTk5NSAzLjEzNDQgNi45OTk1IDcuMDAwNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogPC9nPgogPGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj4KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCg0LjczNTggMCAwIDQuNzM1OCAxMzkuMjEgMTM5LjIxKSIgZD0ibTc0IDc5YzAgMy44NjYtMy4xMzM1IDcuMDAwNC02Ljk5OTUgNy4wMDA0cy03LjAwMDQtMy4xMzQ0LTcuMDAwNC03LjAwMDRjMC0zLjg2NiAzLjEzNDQtNy4wMDA0IDcuMDAwNC03LjAwMDRzNi45OTk1IDMuMTM0NCA2Ljk5OTUgNy4wMDA0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiA8L2c+CiA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCg0LjczNTggMCAwIDQuNzM1OCAxMzkuMjEgMTM5LjIxKSIgZD0ibTY4IDQxaC0yMnptMCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDQuNzM1OCAwIDAgNC43MzU4IDEzOS4yMSAxMzkuMjEpIiBkPSJtMTMgMTRoNS4wOTk5YzEuNzk5OCAwIDMuNjAwNCAwLjcwMDI4IDUuMDAwMSAyLjAwMDJsMC44OTk4OSAwLjgwMDA5YzEuNjAwMiAxLjUwMDQgMi41OTk5IDMuNjAwNCAyLjY5OTcgNS42OTk2bDIuOTAwMSAzNy45YzAuMDk5ODA1IDEuMjAwMSAwLjgwMDA5IDQuNTAwMyAxLjM5OTcgNS41OTk4IDEuMjAwMSAyLjI5OTYgMy4zMDAyIDMuOTk5NiA1Ljk5OTggMy45OTk2aDM5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDQuNzM1OCAwIDAgNC43MzU4IDEzOS4yMSAxMzkuMjEpIiBkPSJtMjUgMThoNTdzNS45OTk4IDAgNS4wMDAxIDcuMDAwNGwtNS4zMDA0IDMyLjljLTAuOTk5NyAyLjkwMDEtMS43IDMuMjAwNC0yLjY5OTcgNC4xMDAyLTAuODAwMDkgMC44MDAwOS0yLjkwMDEgMi4wMDAyLTcuMDAwNCAyLjAwMDJsLTQxLTguMjVlLTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K);
`;

const CounterBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    & > button {
        cursor: pointer;
        width: 24px;
        height: 24px;
        font-size: 18px;
        border: 0;
        padding: 0;
        background: #e7e9ea;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

interface CartCard {
    item: TCartItem
}

let rerenderCount = 1;

const CartCard = ({ item }): JSX.Element => {
    const [, cartActions] = useCart();
    const [product] = useProductsItem(item.id);
    
    rerenderCount++;

    return (
        <Root>
            <span style={{ position: 'absolute', top: -16, left: 0, color: 'red', fontSize: 10 }}>
                re-render: {rerenderCount}
            </span>
            <Image src={product.photos[0]} />
            <Content>
                <Name>{product.name}</Name>
                <Price>{product.price?.value * item.count} {product.price?.currency}</Price>
            </Content>
            <CounterBox>
                <button onClick={() => cartActions.minus(item.id)}>
                    -
                </button>
                <span>
                    {item.count}
                </span>
                <button onClick={() => cartActions.plus(item.id)}>
                    +
                </button>
            </CounterBox>
            <AddToCardButton onClick={() => cartActions.remove(item.id)} />
        </Root>
    );
}

export default memo(CartCard);