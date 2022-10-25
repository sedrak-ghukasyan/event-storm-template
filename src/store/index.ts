import { createStorm } from 'event-storm';
import {
    useStorm as useBaseStorm,
    useDispatch as useBaseDispatch,
    SelectFragment,
    ISubscriptionOptions,
} from 'react-event-storm';

import { TBaseStore } from './types';

export const storm = createStorm<TBaseStore>({});

const useStorm = <T>(
    selector: SelectFragment<TBaseStore, T>,
    configs?: ISubscriptionOptions,
) => useBaseStorm(storm, selector, configs);

const useDispatch = () => useBaseDispatch(storm);

export { useStorm, useDispatch };
