import { useEffect } from "react";

import useProductsList from "store/products";

const ProductsPage = () => {
    const [products, productsActions] = useProductsList();

    useEffect(() => {
        productsActions.read();
    }, [productsActions]);

    console.log(products)

    return (
        <>
            {products?.length > 0 && products.map((product) => (
                <div key={product.id}>
                    {product.name}
                </div>
            ))}
        </>
    );
}

export default ProductsPage;