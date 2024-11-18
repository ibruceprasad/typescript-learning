
// 1. union type
let division: number | string;
let divisions: number[] | string[];
let divisions1: (number | string)[];


// 2. interface type
interface Emp {
    fistname: string,
    lastname: string | undefined
}

// All properties has to be defined eventhough the lastname property is undefined type
let empDetail: Emp = {
    fistname: 'Lal',
    lastname: 'Sam'
}

// 3. Partical Type
let changedDetail: Partial<Emp> = {
    fistname: 'Lal A',
}

// usecase of Partial
empDetail = {
    ...empDetail,
    ...changedDetail
}

console.log(empDetail)