//[] - Array destructing


// {} is used for object destructing. 
// Destructuring is used to extract specific properties ( here empname ) from an existing object 
// Eg: let { empname } = { empname: "Bruce", age: "10" }

// {} is used for spread syntax.  
// Extract all properties of an object into a new object.
// let { ...emp } = { empname: "Bruce", age: "10" }


(function () {

    // Array destructing and array spreading
    function arrayExample() {
        const capitals: Array<string> = ["Melbourne", "Sydney", "Brisbain", "Perth"];
        // viccapital, nswcapital are array destructured 
        // otherCapitals is array spread
        const [viccapital, nswcapital, ...otherCapitals] = capitals
        console.log(viccapital, nswcapital, otherCapitals)
    }


    // Object destructing and object spreading
    interface Employee {
        empname: string,
        age: number
    }

    // Spread operator as function argument

    const Display1 = ({ ...emp }: Employee): void => {
        console.log(emp)
    }

    const Display = (employee: Employee): void => {
        console.log(employee)
    }



    function objectExample() {

        let driver: Employee = {
            empname: "lal",
            age: 17
        }

        // Returns an anonymous object
        const getDetails = () => {
            return { empname: "Bruce", age: "10" }
        }

        // 1. Spread syntax
        let { ...details } = getDetails();
        console.log("Employee Details: ", details.age, details.empname)

        // 2. Destructor syntax
        let { empname, age } = getDetails();

        // 3. Destructure with alias
        let { empname: EmpName, age: Age } = getDetails();


        // 4. A function returens typed object using spread operator
        const getEmpDetails = () => { return { ...driver } }

        // 5 A function returens typed object  
        const getEmpDetails1 = (): Employee => driver


        let emp: Employee = getEmpDetails();
        let emp1: Employee = getEmpDetails1();

        Display(driver)
        Display({ empname: "Bruce", age: 10 })

        Display1(driver)
        Display1({ empname: "Bruce", age: 10 })
    }

})();