export async function delay<T>(response: T, delay: number = 0): Promise<T> {
    const delayPromise = (ms: number) => new Promise(res => setTimeout(res, ms))
    await delayPromise(delay)

    return response;
}

