const userName: string = 'Kousik';

console.log("Welcome " + userName);

const add = (a: number, b:number) => {
    return a + b;
}

const subtract = (a: number, b: number) => a - b;

console.log(add(3, 6));
console.log(subtract(8, 4));

const printResult: (a: number | string) => void = output => console.log(output);

printResult('5');

const button = document.querySelector('button')!;

if (button) {
    button.addEventListener('click', event => { console.log(event)});    
}

const hobbies = ['cooking', 'sports'];
const activeHobbies = ['hiking'];

console.log(hobbies[0]);
console.log(activeHobbies[0]);

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
    firstname: 'Kousik',
    age: 49
}

const modifiedPerson = {lastname: 'das', ...person, id: 113895 };

modifiedPerson.age = 50;

console.log(person.age);
console.log(modifiedPerson.id);
console.log(modifiedPerson.lastname);

const addNumbers = (...numbers: number[]) => {

    return numbers.reduce((currVal: number, recentVal: number) => {
        console.log("Current Value : " + currVal);
        console.log("Recent Value : " + recentVal);

           return currVal * recentVal;
    }, 0);

}

console.log(addNumbers(3, 4, 7.2, 6.5, 12));

const [a, b] = activeHobbies
console.log("**********" + a);
console.log("**********" + b);

const { firstname, age } = person;

console.log("**********" + firstname);
console.log("**********" + age);

