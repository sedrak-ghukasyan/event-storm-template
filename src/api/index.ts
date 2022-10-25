import { delay } from './utils';

import productsMock from './products-mock.json';

export const products = {
    read: () => delay(productsMock),
}