"use strict";
class Department {
    constructor(firstname) {
        this.firstname = firstname;
    }
}
const dept = new Department('Accounting');
console.log(dept.firstname);
