import { filterCallback } from "../src/1.FilterSimulator";
import { arraysEqual } from "../src/0.ArrayUtility"

describe.skip('test callback', () => {

    let employees = [
        { name: 'A', age: 50, dept: 'compter' },
        { name: 'B', age: 40, dept: 'electrical' },
        { name: 'C', age: 20, dept: 'compter' },
        { name: 'D', age: 50, dept: 'compter' },
        { name: 'E', age: 40, dept: 'electrical' },
        { name: 'F', age: 61, dept: 'electrical' },
        { name: 'G', age: 40, dept: 'electrical' },
        { name: 'H', age: 70, dept: 'compter' }
    ]


    test('callback filter for senior employees', () => {

        let seniors = filterCallback(employees, (employee) => employee.age > 60)
        expect(seniors.length).toEqual(2)
        var names = seniors.map((s) => s.name)

        var expected = ['H', 'F'];
        var isEqual = arraysEqual(names, expected)

        expect(isEqual).toEqual(true)
    })


});

