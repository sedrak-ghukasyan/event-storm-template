export type TProduct = {
    id: string;
    name: string,
    price: {
        value: number,
        currency: string
    },
    photos: string[]
};

export type TBaseStore = {
    products?: TProduct[],
};

export interface IBusy<Type> {
    results?: Type;
    isLoading?: boolean;
}