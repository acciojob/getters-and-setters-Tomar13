class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  get name() {
    return this._name;
  }
  
  set name(name) {
    this._name = name;
  }
  
  get age() {
    return this._age;
  }
  
  set age(age) {
    this._age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  
  study() {
    console.log(`${this.name} is studying.`);
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am a student in grade ${this.grade}.`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  
  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I teach ${this.subject}.`);
  }
}

const person = new Person('Alice', 25);
person.sayHello();

const student = new Student('Bob', 20, 10);
student.sayHello();
student.study();

const teacher = new Teacher('Charlie', 35, 'Math');
teacher.sayHello();
teacher.teach();
