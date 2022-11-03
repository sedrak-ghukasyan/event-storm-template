import useCart from "store/cart";
import useProducts from "store/products";

export const useCartTotalPrice = () => {
    const [cart] = useCart();
    const [products] = useProducts();

    return cart?.length > 0 ? cart.reduce((total, item) => {
        const product = products.find(({ id }) => id === item.id);

        return total + (product.price.value * item.count);
    }, 0) : 0;
}