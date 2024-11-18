import { MyCollection } from "../src/3.GenericClass";

describe.skip('test generic class', () => {

    class Cycle {
        model: string;
        year: number;
        price: number
        constructor(model: string, year: number, price: number) {
            this.model = model
            this.year = year
            this.price = price
        }
    }


    test('generic class tests', () => {

        // 1. create cycle collection
        let cycles = new MyCollection<Cycle>();
        expect(cycles).toBeInstanceOf(MyCollection);

        // 2. populate cycle to collection
        for (let i = 0, year = 1995, price = 3000; i < 10; i++, year++, price += 1000) {
            let cycle = new Cycle(`${year} release`, year, price)
            cycles.pushItem(cycle)
        }
        expect(cycles.getLength()).toEqual(10)

        // 3. get all cycles 
        let allCycles: Cycle[] = cycles.getAll()
        expect(allCycles.length).toEqual(cycles.getLength())


        // 4. get all cycles with year > 2000
        let filteredCycles: Cycle[] = cycles.getAll((item) => item.year > 2000)
        expect(filteredCycles).toEqual(cycles.getAll().filter((item) => item.year > 2000))  // Using filter verify by array filter()


        //5. first cycle in the list 
        let firstCycle: Cycle | null = cycles.getFirstOrDefault()
        let first = new Cycle(`${1995} release`, 1995, 3000)
        expect(firstCycle).toEqual(first)


        //6. first cycle with year >2000
        let firstFilteredCycle: Cycle | null = cycles.getFirstOrDefault((cycle) => { return cycle.year > 2000 })
        var firstFiltered = new Cycle(`${2001} release`, 2001, 9000)
        expect(firstFilteredCycle).toEqual(firstFiltered)

    })
});


