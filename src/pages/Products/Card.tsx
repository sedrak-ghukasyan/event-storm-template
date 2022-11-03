import styled from 'styled-components';

import useCart from 'store/cart';
import { TProduct } from 'store/types';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Name = styled.p`
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    margin-top: 8px;
`;

const Image = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center center;
    background-color: #e7e9ea;
    position: relative;
    border: 1px solid black;
`;

const Price = styled.b`
    font-size: 18px;
    font-weight: bold;
`;

const CartButton = styled.button`
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    right: -10px;
    bottom: -10px;
    border: 1px solid black;
    background-position: center;
    background-size: cover;
    background-color: ${({ matched }) => matched ? '#e7e9ea' : '#fff'};
    background-image: url(${({ matched }) => (
        matched
            ? 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImIiPgogICA8cGF0aCBkPSJtMTQ3IDM0NmgzMzV2MjY2Ljc5aC0zMzV6Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjg5IDM0NmgzMjMuNzl2MjY2Ljc5aC0zMjMuNzl6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNiKSI+CiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoNC43MzU4IDAgMCA0LjczNTggMTM5LjIxIDEzOS4yMSkiIGQ9Im00NCA3OWMwIDMuODY2LTMuMTMzNSA3LjAwMDQtNi45OTk1IDcuMDAwNHMtNy4wMDA0LTMuMTM0NC03LjAwMDQtNy4wMDA0YzAtMy44NjYgMy4xMzQ0LTcuMDAwNCA3LjAwMDQtNy4wMDA0czYuOTk5NSAzLjEzNDQgNi45OTk1IDcuMDAwNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogPC9nPgogPGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj4KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCg0LjczNTggMCAwIDQuNzM1OCAxMzkuMjEgMTM5LjIxKSIgZD0ibTc0IDc5YzAgMy44NjYtMy4xMzM1IDcuMDAwNC02Ljk5OTUgNy4wMDA0cy03LjAwMDQtMy4xMzQ0LTcuMDAwNC03LjAwMDRjMC0zLjg2NiAzLjEzNDQtNy4wMDA0IDcuMDAwNC03LjAwMDRzNi45OTk1IDMuMTM0NCA2Ljk5OTUgNy4wMDA0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiA8L2c+CiA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCg0LjczNTggMCAwIDQuNzM1OCAxMzkuMjEgMTM5LjIxKSIgZD0ibTY4IDQxaC0yMnptMCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDQuNzM1OCAwIDAgNC43MzU4IDEzOS4yMSAxMzkuMjEpIiBkPSJtMTMgMTRoNS4wOTk5YzEuNzk5OCAwIDMuNjAwNCAwLjcwMDI4IDUuMDAwMSAyLjAwMDJsMC44OTk4OSAwLjgwMDA5YzEuNjAwMiAxLjUwMDQgMi41OTk5IDMuNjAwNCAyLjY5OTcgNS42OTk2bDIuOTAwMSAzNy45YzAuMDk5ODA1IDEuMjAwMSAwLjgwMDA5IDQuNTAwMyAxLjM5OTcgNS41OTk4IDEuMjAwMSAyLjI5OTYgMy4zMDAyIDMuOTk5NiA1Ljk5OTggMy45OTk2aDM5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDQuNzM1OCAwIDAgNC43MzU4IDEzOS4yMSAxMzkuMjEpIiBkPSJtMjUgMThoNTdzNS45OTk4IDAgNS4wMDAxIDcuMDAwNGwtNS4zMDA0IDMyLjljLTAuOTk5NyAyLjkwMDEtMS43IDMuMjAwNC0yLjY5OTcgNC4xMDAyLTAuODAwMDkgMC44MDAwOS0yLjkwMDEgMi4wMDAyLTcuMDAwNCAyLjAwMDJsLTQxLTguMjVlLTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K'
            : 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImIiPgogICA8cGF0aCBkPSJtMTQ3IDM1NWgzMzV2MjU3Ljc5aC0zMzV6Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjg5IDM1NWgzMjMuNzl2MjU3Ljc5aC0zMjMuNzl6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNiKSI+CiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoNC43MzU4IDAgMCA0LjczNTggMTM5LjIxIDEzOS4yMSkiIGQ9Im00NCA4MWMwIDMuODY2LTMuMTMzNSA2Ljk5OTUtNi45OTk1IDYuOTk5NXMtNy4wMDA0LTMuMTMzNS03LjAwMDQtNi45OTk1YzAtMy44NjYgMy4xMzQ0LTcuMDAwNCA3LjAwMDQtNy4wMDA0czYuOTk5NSAzLjEzNDQgNi45OTk1IDcuMDAwNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogPC9nPgogPGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj4KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCg0LjczNTggMCAwIDQuNzM1OCAxMzkuMjEgMTM5LjIxKSIgZD0ibTc0IDgxYzAgMy44NjYtMy4xMzM1IDYuOTk5NS02Ljk5OTUgNi45OTk1cy03LjAwMDQtMy4xMzM1LTcuMDAwNC02Ljk5OTVjMC0zLjg2NiAzLjEzNDQtNy4wMDA0IDcuMDAwNC03LjAwMDRzNi45OTk1IDMuMTM0NCA2Ljk5OTUgNy4wMDA0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiA8L2c+CiA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCg0LjczNTggMCAwIDQuNzM1OCAxMzkuMjEgMTM5LjIxKSIgZD0ibTU3IDI4djIyem0wIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoNC43MzU4IDAgMCA0LjczNTggMTM5LjIxIDEzOS4yMSkiIGQ9Im02OCAzOWgtMjJ6bTAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCg0LjczNTggMCAwIDQuNzM1OCAxMzkuMjEgMTM5LjIxKSIgZD0ibTEzIDEyaDUuMDk5OWMxLjc5OTggMCAzLjYwMDQgMC43MDAyOCA1LjAwMDEgMi4wMDAybDAuODk5ODkgMC44MDAwOWMxLjYwMDIgMS41MDA0IDIuNTk5OSAzLjYwMDQgMi42OTk3IDUuNjk5NmwyLjkwMDEgMzcuOWMwLjA5OTgwNSAxLjIwMDEgMC44MDAwOSA0LjUwMDMgMS4zOTk3IDUuNTk5OCAxLjIwMDEgMi4yOTk2IDMuMzAwMiAzLjk5OTYgNS45OTk4IDMuOTk5NmgzOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCg0LjczNTggMCAwIDQuNzM1OCAxMzkuMjEgMTM5LjIxKSIgZD0ibTI1IDE2aDU3czUuOTk5OCAwIDUuMDAwMSA3LjAwMDRsLTUuMzAwNCAzMi45Yy0wLjk5OTcgMi45MDAxLTEuNyAzLjIwMDQtMi42OTk3IDQuMTAwMi0wLjgwMDA5IDAuODAwMDktMi45MDAxIDIuMDAwMi03LjAwMDQgMi4wMDAybC00MS04LjI1ZS00IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg=='
    )})
`;

interface ProductCard {
    item: TProduct
}

const ProductCard = ({ item }): JSX.Element => {
    const [, cartAction] = useCart();
    const isMatch = cartAction.match(item.id);

    const handleAddToCart = () => {
        isMatch ? cartAction.remove(item.id) : cartAction.add(item.id)
    }
    
    return (
        <Root>
            <Image src={item.photos[0]}>
                <CartButton
                    matched={isMatch}
                    onClick={handleAddToCart}
                />
            </Image>
            <Name>{item.name}</Name>
            <Price>{item.price.value} {item.price.currency}</Price>
        </Root>
    );
}

export default ProductCard;