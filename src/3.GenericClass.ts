
export class MyCollection<T> {
    //private
    private items: Array<T> = [];

    pushItem(item: T): number {
        return this.items.push(item)
    }

    popItem(): T | undefined {
        return this.items.pop();
    }

    getAll(predicate?: (arg: T) => boolean): T[] {
        if (predicate === undefined)
            return this.items
        let filtered: T[] = [];
        for (let item of this.items) {
            if (predicate && predicate(item)) {
                filtered.push(item)
            }
        }
        return filtered;
    }

    getFirstOrDefault(predicate?: (arg: T) => boolean): T | null {
        if (predicate === undefined)
            return this.items[0]
        for (let item of this.items) {
            if (predicate && predicate(item)) {
                return item
            }
        }
        return null
    }

    getLastOrDefault(predicate?: (arg: T) => boolean): T | null {
        for (let item of this.items) {
            if (predicate && predicate(item)) {
                return item
            }
        }
        return null
    }

    getLength(): number {
        return this.items.length
    }

}


