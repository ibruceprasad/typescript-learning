(function () {
    // 1 method
    const method1 = (input: string): string => {
        let reversed = "";
        for (let i = input.length - 1; i >= 0; i--) {
            reversed += input[i];
        }
        return reversed
    }
    // 2 method 
    const method2 = (input: string): string =>
        input.split('').reverse().join('');

    // 3 method
    const method3 = (input: string): string =>
        [...input].reverse().join('')


    let op1 = method1("hello")
    let op2 = method2("hello")
    let op3 = method3("hello")
    console.log(op1, op2, op3)
})();