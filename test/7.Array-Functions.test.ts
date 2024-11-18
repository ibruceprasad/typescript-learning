import { Shop, Cycle } from "../src/7.Array-Functions"

describe('Test for map() redue() filter() ', () => {
    test('Call Shop functions', async () => {

        let data: Array<Cycle> = []
        data = [
            new Cycle('A Model', 1995, 3000),
            new Cycle('B Model', 1996, 4000),
            new Cycle('C Model', 1997, 5000),
            new Cycle('D Model', 1998, 6000),
            new Cycle('E Model', 1998, 7000),
            new Cycle('F Model', 2000, 8000),
            new Cycle('G Model', 2001, 9000),
            new Cycle('H Model', 2002, 10000),
            new Cycle('I Model', 2003, 11000),
            new Cycle('J Model', 2004, 12000),
            new Cycle('K Model', 2005, 13000),
            new Cycle('L Model', 2001, 14000)
        ];

        /*
        for (let i = 0, year = 1995, price = 3000; i < 10; i++, year++, price += 1000) {
            let cycle = new Cycle(`${i}model`, year, price)
            data.push(cycle)
        }
        */

        let shop: Shop = new Shop(data);

        let allcycles: Cycle[] = shop.getCycles()

        expect(allcycles.length).toBe(data.length)
        expect(allcycles).toBe(data)

        let allModelNames: string[] = shop.getAllModelNames()

        let allModelNamesAfterYear2000: string[] = shop.getModelNamesAfterYear2000();

        let totalPriceOfModelAfterYear2000 = shop.getTotalPriceOfModelAfterYear2000();

        let averagePriceOfModelAfterYear2000 = shop.getAveragePriceOfModelAfterYear2000()
        expect(averagePriceOfModelAfterYear2000).toBe(2759.9665637860085)

        expect(shop.IsAnyCycleMadein1998()).toBe(true)
        expect(shop.IsAllCycleMadein1998()).toBe(false)
        expect(shop.findCycleMadein1998()).toEqual(new Cycle('D Model', 1998, 6000))

    });
});

