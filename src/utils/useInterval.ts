import { useEffect, useRef } from 'react';

interface IUseInterval {
    (callback: () => void, interval: number): void;
}

const useInterval: IUseInterval = (callback, delay) => {
    const savedCallback = useRef<(() => void) | null>(null);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback?.current();
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export default useInterval;
