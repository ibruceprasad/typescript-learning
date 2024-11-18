// Simulate the array function "filter" using the callback

export const filterCallback = (items: any[], predicate: (item: any) => boolean): any[] => {
    const filtered: any[] = []
    for (let item of items) {
        if (predicate(item))  // boolean
            filtered.push(item)
    }
    return filtered;
}