/**
 * Завдання
        Створити клас Employee, у якому будуть такі характеристики - name (ім'я), age (вік), salary (зарплата). Зробіть так, щоб ці характеристики заповнювалися під час створення об'єкта.
        Створіть гетери та сеттери для цих властивостей.
        Створіть клас Programmer, який успадковуватиметься від класу Employee, і який матиме властивість lang (список мов).
        Для класу Programmer перезапишіть гетер для властивості salary. Нехай він повертає властивість salary, помножену на 3.
        Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.
        Примітка
        Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.
 */

class Employee {
    #name;
    #age;
    #salary;

    constructor(name, age, salary) {
        this.#name = name;
        this.#age = age;
        this.#salary = salary;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get salary() {
        return this.#salary;
    }

    set name(value) {
        this.#name = value;
    }

    set age(value) {
        this.#age = value;
    }

    set salary(value) {
        this.#salary = value;
    }
}

class Programmer extends Employee {
    #lang = [];

    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.#lang = lang;
    }

    get salary() {
        return super.salary * 3;
    }

    get lang() {
        return this.#lang;
    }

    set lang(value) {
        this.lang.push(value);
    }
}

const employee = new Employee("David Kohl", 25, 1400);
console.log(employee);
employee.salary = 1800;
console.log(employee);

const programmer = new Programmer("Sam Brown", 30, 1500, ["Java", "JavaScript"]);
console.log(programmer);
console.log(programmer.salary);
programmer.lang = "TypeScript";
console.log(programmer);

const programmer2 = new Programmer("James Silver", 40, 2600, []);
console.log(programmer2);
programmer2.lang = "Python";
programmer2.lang = "PHP";
programmer2.lang = "C++";
console.log(programmer2);
console.log(programmer2.salary);