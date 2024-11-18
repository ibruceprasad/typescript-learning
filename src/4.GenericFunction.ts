interface Fruit {
    name: string;
    price: number;
    display(): void;
}

export class WildFruit implements Fruit {
    name!: string;
    price!: number;
    display(): void {
        console.log(`Fruit: ${this.name}, Price: ${this.price}`);
    }
}



export class FruitBilling {
    print<T extends Fruit>(fruit: T, quantilty: number): string {
        let total = fruit.price * quantilty
        return `Total: ${total} `
    }
}



