import { promiseFunction } from "../src/6.PromiseFunction";


describe.skip('Call promise function promiseFunction', () => {

    describe.skip('1. Call the promise function promiseFunction  by await', () => {
        test('Call promiseFunction call by await', async () => {
            let age = await promiseFunction()
            console.log("age is: ", age)
            expect(Number(age)).toBe(92)
        });
    });
});