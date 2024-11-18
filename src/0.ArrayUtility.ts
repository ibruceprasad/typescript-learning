export const arraysEqual = <T>(arr1: T[], arr2: T[]): boolean => {
    if (arr1.length !== arr2.length) return false;

    const sortedArr1 = [...arr1].sort();
    const sortedArr2 = [...arr2].sort();

    console.log(sortedArr1, sortedArr2)
    return sortedArr1.every((value, index) => value === sortedArr2[index]);
}


