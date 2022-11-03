import { TCartItem } from 'store/types';
import { useStorm, useDispatch } from 'store';

export type TCartState = TCartItem[];
export type TCartActions = {
    add: (id: string) => void;
    remove: (id: string) => void;
    toggle: (id: string) => void;
    match: (id: string) => boolean;
    plus: (id: string) => void;
    minus: (id: string) => void;
};

const useCart = (): [TCartState, TCartActions] => {
    const dispatch = useDispatch();
    const cartItems = useStorm<TCartState>((state, subscribe) =>
        subscribe(state.cart)
    );

    const findIndex = (id: string): number => {
        return cartItems?.findIndex(i => i.id === id);
    }

    const match = (id: string): boolean => findIndex(id) >= 0;

    const remove = (id: string) => {
        if (match(id)) {
            dispatch(({ cart }) => ({
                cart: cart.filter(item => item.id !== id)
            }));
        }
    }

    const add = (id: string) => {
        if (!match(id) ) {
            dispatch(({ cart = [] }) => ({
                cart: [
                    {
                        id,
                        count: 1,
                    },
                    ...cart,
                ]
            }));
        }
    }

    const toggle = (id: string) => {
        match(id) ? remove(id) : add(id);
    }

    const plus = (id: string) => {
        const index = findIndex(id);

        dispatch(({ cart = [] }) => {
            const item = cart[index];
            cart[index] = {
                ...item,
                count: ++item.count,
            }
            return {
                cart,
            };
        });
    }

    const minus = (id: string) => {
        const index = findIndex(id);
        const item = cartItems[index];

        if (item.count > 1) {
            dispatch(({ cart = [] }) => {
                cart[index] = {
                    ...item,
                    count: --item.count,
                }
                return {
                    cart,
                };
            });
        }
    }

    return [cartItems, { add, match, remove, toggle, plus, minus }];
}

export default useCart;