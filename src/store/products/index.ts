import { useStorm, useDispatch } from 'store';
import { TProduct } from 'store/types';

import { products } from 'api';

export type TProductsListState = TProduct[];
export type TProductsListActions = {
    read: () => Promise<void>
};

const useProductsList = (): [TProductsListState, TProductsListActions] => {
    const dispatch = useDispatch();
    const productsState = useStorm<TProductsListState>((state, subscribe) =>
        subscribe(state.products)
    );

    const read = async () => {
        const data = await products.read();
        
        
        dispatch({
            products: data
        });
    }

    return [productsState, { read }];
}

export default useProductsList;