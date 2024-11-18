import { WildFruit, FruitBilling } from "../src/4.GenericFunction";

class Berris extends WildFruit {

}

const item = new Berris();
item.price = 50;
item.name = "berris";
const billing = new FruitBilling();

describe.skip('Generic Function Tests', () => {

    test('Billing message with total price', () => {
        var printMessage = billing.print<Berris>(item, 10);
        expect(printMessage).toMatch(/^Total: /)

        let total = printMessage.split(' ')[1]
        total = total.trim()

        expect(typeof (Number(total))).toBe("number")
    });
});



