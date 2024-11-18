
/*
1. map
2. filter
3. reduce
4. find - find the FIRST element matches the condition
5. some - check any element meets the condition
6. every - check all elements meets the condition
7 forEach
*/

export class Cycle {
    model: string;
    year: number;
    price: number
    constructor(model: string, year: number, price: number) {
        this.model = model
        this.year = year
        this.price = price
    }
}



export class Shop {

    // 1. declare
    private cycles: Cycle[] = []

    // 2. init
    constructor(cycles: Cycle[]) {
        this.cycles = cycles
    }

    getCycles(): Cycle[] {
        return this.cycles
    }
    //3. Using map() - Get all model names 
    getAllModelNames(): string[] {
        return this.cycles.map((cycle) => cycle.model)
    }

    //4. Using map() and filter()  - Get all model names after year 2000 
    getModelNamesAfterYear2000(): string[] {
        return this.cycles
            .filter((x) => x.year > 2000)
            .map((cycle) => cycle.model);
    }

    //5. Using map(),filter(),reduce()  - Get total price of all model  after year 2000 
    getTotalPriceOfModelAfterYear2000(): number {
        return this.cycles
            .filter((x) => x.year > 2000)
            .map((cycle) => cycle.price)
            .reduce((total, price) => {
                total = total + price;
                return total
            }, 0)
    }

    //6. Using map(),filter(),reduce()  - Get average price of all model  after year 2000 
    getAveragePriceOfModelAfterYear2000(): number {
        let allPriceOfModelAfterYear2000 = this.cycles.filter((x) => x.year > 2000)
            .map((cycle) => cycle.price)
        let averagePriceOfModelAfterYear2000 = allPriceOfModelAfterYear2000.reduce((total, price) => {
            total = total + price
            return total / allPriceOfModelAfterYear2000.length    // return is needed
        }, 0)
        return averagePriceOfModelAfterYear2000                 // return is needed 
    }

    // return first, else undefined - check first ones
    findCycleMadein1998(): Cycle | undefined {
        return this.cycles.find((cycle) => cycle.year === 1998)
    }

    // return some(any)  - check first ones
    IsAnyCycleMadein1998(): boolean {
        return this.cycles.some((cycle) => cycle.year === 1998)
    }

    // return every - returns when first one not matches
    IsAllCycleMadein1998(): boolean {
        return this.cycles.every((cycle) => cycle.year === 1998)
    }

}


