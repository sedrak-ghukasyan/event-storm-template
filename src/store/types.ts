export type TPrice = {
    value: number,
    currency: string
}

export type TProduct = {
    id: string;
    name: string,
    price: TPrice,
    photos?: string[]
};

export type TCartItem = {
    id?: string;
    count?: number;
    price?: TPrice;
}

export type TBaseStore = {
    cart?: TCartItem[],
    products?: TProduct[],
};

export interface IBusy<Type> {
    results?: Type;
    isLoading?: boolean;
}