class Department{
    firstname: string;

    constructor(firstname: string) {
        this.firstname = firstname;
     }
}

const dept = new Department('Accounting');

console.log(dept.firstname);