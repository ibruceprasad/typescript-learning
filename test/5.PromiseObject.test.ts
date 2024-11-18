import { agePromise } from "../src/5.PromiseObject";


describe.skip('Call agePromise', () => {

    describe.skip('1. Call agePromise call by await', () => {
        test('Call agePromise call by await', async () => {
            let age = await agePromise;
            console.log("age is: ", age)
            expect(Number(age)).toBe(92)
        });
    });

    describe.skip('2. Call agePromise call by then()', () => {
        //  TODO: change if (true)  in agePromise
        test('Call agePromise by then() and display the returned age', async () => {
            // (a) Call promise by then()
            agePromise
                .then((value) => {
                    console.log("then handler: ", value);
                    expect(Number(value)).toBeGreaterThan(0)
                })
                .catch((error) => {
                    console.log("catch handler: ", error);
                    throw Error("This never happens")
                });

        });


        // // TODO: change   if (!true)  in agePromise
        // test('Call agePromise by then() and display the returned age', () => {

        //     agePromise
        //         .then((value) => {
        //             console.log("then handler: ", value);
        //             throw Error("This never happens")
        //         })
        //         .catch((error) => {
        //             console.log("catch handler: ", error);
        //             expect(error).toMatch(/^agePromise error/)
        //         });
        // });


    });
});
