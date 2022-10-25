export type TProduct = {
    id: string;
    name: string,
    price: {
        value: number,
        currency: string
    },
    photos?: string[]
};

export type TCartItem = {
    id?: string;
    count?: number;
}

export type TBaseStore = {
    cart?: TCartItem[],
    products?: TProduct[],
};

export interface IBusy<Type> {
    results?: Type;
    isLoading?: boolean;
}