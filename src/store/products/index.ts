import { useStorm, useDispatch } from 'store';
import { TProduct } from 'store/types';

import { products } from 'api';

export type TProductsListState = TProduct[];
export type TProductsListActions = {
    read: () => Promise<void>
    inflation: () => void;
};

const useProductsList = (): [TProductsListState, TProductsListActions] => {
    const dispatch = useDispatch();
    const productsState = useStorm<TProductsListState>((state, subscribe) =>
        subscribe(state.products?.map((item, index) => {
            subscribe(state.products[index].price.value);
            return item;
        }))
    );

    const read = async () => {
        const data = await products.read();

        dispatch({
            products: data
        });
    }

    const inflation = () => {
        dispatch(({ products }) => {
            products.forEach((item, index) => {
                if (index % 3) {
                    item.price.value = item.price.value + 10;
                }
            });

            // products: productsState.map(({ price, ...item }) => ({
            //     ...item,
            //     name: item.name,
            //     price: {
            //         ...price,
            //         value: price.value + 10,
            //     }
            // })),

            return ({
                products
            });
        });
    }

    return [productsState, { read, inflation }];
}

export default useProductsList;