import { TCartItem } from 'store/types';
import { useStorm, useDispatch } from 'store';

export type TCartState = TCartItem[];
export type TCartActions = {
    add: (id: string) => void;
    remove: (id: string) => void;
    toggle: (id: string) => void;
    match: (id: string) => boolean;
};

const useCart = (): [TCartState, TCartActions] => {
    const dispatch = useDispatch();
    const cartItems = useStorm<TCartState>((state, subscribe) =>
        subscribe(state.cart)
    );

    const match = (id: string): boolean => {
        return cartItems?.findIndex(i => i.id === id) >= 0;
    }

    const remove = (id: string) => {
        if (match(id) ) {
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

    return [cartItems, { add, match, remove, toggle }];
}

export default useCart;