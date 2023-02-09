// 1. Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
// It should have a toString method.


class Author {
    constructor (name, email, gender){
        this.name = name;
        this.email = email;
        this.gender = gender
    }
    get name() {
        return this._name;
    }
    set name(v){
        this._name = v;
    } 
    get email() {
        return this._email;
    }
    set email(v){
        this._email = v;
    } 
    get gender() {
        return this._gender;
    }
    set gender(v){
        this._gender = v;
    } 
    toString(){
        return `Author name is ${this.name}, email is ${this.email}, gender is ${this.gender}`
    }

}

class Book {
    constructor(title, author, price, quantity){
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
    get title(){
        return this._title;
    }
    set title(v){
        this._title = v;
    }
    get author(){
        return this._author;
    }
    set author(v){
        this._author = v;
    }
    get price(){
        return this._price;
    }
    set price(v){
        this._price = v;
    }
    get quantity(){
        return this._quantity;
    }
    set quantity(v){
        this._quantity = v;
    }
    getProfit(){
        return `${this.price * this.quantity}$`;
    }
    toString(){
        return `Book title is ${this.title}, author is ${this.Author}, price is ${this.price}, quantity is ${this.quantity}`
    }
}

const bob = new Author('Bob', 'bobo@gmail.com', 'male');
const bbook = new Book('life of Bobo', bob, 10, 100);

console.log(bbook);

// console.log(bob.toString());
// console.log(bbook.getProfit());


// 2. Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the
// balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the
// amount from the account balance and add it to the given anotherAccount and return the
// updated balance, if amount is less than the balance, otherwise output “Amount
// exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which
// gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.


class Account{
    constructor(name, balance){
        // this.id = new Date().getTime();
        this.id = Math.floor(Math.random() * 10000)
        this.name = name;
        this.balance = balance;
        this.notice = '';
    }
    // get id(){
    //     return this._id;
    // }
    set id(v){
        this._id = v;
    }
    get name(){
        return this._name;
    }    
    set name(v){
        this._name = v;
    }
    get balance(){
        return this._balance;
    }    
    set balance(v){
        this._balance = v;
    }
    credit(amount){
        return this.balance += amount;
    }
    debit(amount){
        if (this.balance > amount) {
            return this.balance -= amount;
        }else{
            return this.notice = 'Amount exceeded balance.'
        }
    }
    transferTo(anotherAccount, amount){
        if (this.balance > amount) {
            this.balance -= amount;
            return this.notice =`${anotherAccount} transfered ${amount}`
        }else{
            return this.notice = 'Amount exceeded balance.';
        }
    }
    static identifyAccounts(accountFirst, accountSecond){
        return accountFirst._id === accountSecond._id;
    }
    toString(){
        return `hello ${this.name} your id is ${this._id} your balance is ${this.balance}`
    }
}

const person = new Account('Bobo', 1000);
const person2 = new Account('Bobo', 1000);
person.credit(1000);
// person.debit(3000);
// person.transferTo('anotherAccount', 3000)
console.log(Account.identifyAccounts(person, person2))


console.log(person.toString());
console.log(person2.toString());




// 3. Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().
// Student is inherited from Person. It should have program(array of strings), year, fee.
// It should have appropriate getters and setters.
// It should have method: passExam(program, grade). Student should contain the data
// about its programs and exams. passExam will update that data, so if student passed all
// the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.
// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters.
// It should have a toString method.

class Person {
    constructor(firstName, lastname, gender, age){
        this.firstName = firstName;
        this.lastname = lastname;
        this.gender = gender;
        this.age = age;
    }
    get firstName(){
        return this._firstName;
    }    
    set firstName(v){
        this._firstName = v;
    }
    get lastname(){
        return this._lastname;
    }    
    set lastname(v){
        this._lastname = v;
    }
    get gender(){
        return this._gender;
    }    
    set gender(v){
        this._gender = v;
    }
    get age(){
        return this._age;
    }    
    set age(v){
        this._age = v;
    } 
    toString(){
        return `im ${this.firstName} ${this.lastname} gender ${this.gender} and ${this.age} years old`
    }   
}

class Student extends Person {
    constructor(programs, year, fee, personProperties){
        super(...Object.values(personProperties));

        this.year = year;
        this.fee = fee;
        this.programs = programs || [];
        this.exams = programs.reduce((acc, program) => { 
            acc[program] = null;

            return acc;
        }, {});
    }

    get year(){
        return this._year;
    }    
    set year(v){
        this._year = v;
    }
    get fee(){
        return this._fee;
    }    
    set fee(v){
        this._fee = v;
    }
    get programs(){
        return this._programs;
    }    
    set programs(v){
        this._programs = v;
    }

    ensureExamsPassed() {
        const grades = Object.values(this.exams);

        if (grades.includes(null)) {
            return false;
        }

        const totalGrade = grades.reduce((acc, g) => {
            acc += g;
            return acc;
        }, 0);

        console.log(totalGrade);

        if (totalGrade > 50) {
            this.increaseYear();
        }
    }

    increaseYear() {
        this.year += 1;
    }

    passExam(program, grade) {
        if (!this.exams.hasOwnProperty(program)) {
            throw new Error('exam does not exist');
        }
        
        this.exams[program] = grade;

        this.ensureExamsPassed();
    }

    toString() {
        return `student programs ${[this.programs]}`;
    }
}


class Staff extends Person{
    constructor(profession, pay, personProperties){
        super(...Object.values(personProperties));
        this.profession = profession;
        this.pay = pay;
    }
    get profession(){
        return this._profession;
    }    
    set profession(v){
        this._profession = v;
    }
    get pay(){
        return this._pay;
    }    
    set pay(v){
        this._pay = v;
    }
    toString() {
        return `${this.profession} salary ${this.pay}`;
    }
}

const bobo = new Person('Bob', 'Bobo', 'male', 10);

const student = new Student(['Math', 'Grammar'], 1, 100, { firstName:'Bob', lastname: 'Bobo', gender:'male', age:10 });

const teacher = new Staff('teacher', 1000, { firstName:'Bob', lastname: 'Bobo', gender:'male', age:10 })