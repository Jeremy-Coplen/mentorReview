class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    // This will be copied on to every object created from this class
    sayName() {
        return `Hello ${this.firstName} ${this.lastName}!`
    }
}

// This will be the only copy and the objects will have access to it
Person.prototype.sayName2 = () => `Hello ${this.firstName} ${this.lastName}!`