
// A promise function is a Async wrapper method to access the promise  value

import { agePromise } from "./5.PromiseObject";

// A return type of an async method is  a promise
export const promiseFunction = async (): Promise<number> => {
    var val = await agePromise;
    return Number(val);
}

