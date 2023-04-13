class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  isSeniorCitizen() {
    return this.age >= 60;
  }
  
}

const p = new Parent("abc", 68);
