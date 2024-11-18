(function () {

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

    // select only model and price
    var modelprices = data.map((cycle) => ({ modelname: cycle.model, priceval: cycle.price }))
    console.log(modelprices)

    var criteriaresult = data.map((cycle) => cycle.price > 8000)
    console.log(criteriaresult)
    /*
        [
            false, false, false,
            false, false, false,
            true,  true,  true,
            true,  true,  true
        ]
    */
})();
