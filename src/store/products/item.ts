import { useStorm } from 'store';
import { TProduct } from 'store/types';

const useProductsItem = (id: string): [TProduct] => {
    const productState = useStorm<TProduct>((state, subscribe) =>
        subscribe(state.products.find(item => item.id === id))
    );

    return [productState];
}

export default useProductsItem;