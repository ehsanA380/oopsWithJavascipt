class Person{
    live(){
        console.log('living...')
    }
}

class User extends Person{

    constructor(firstName, lastName, age){
        super();
        this.firstName=firstName ;
        this.lastName=lastName ;
        this.age=age ;
    }
    work(){
        console.log('user is working...')
    }
    

    getBirthYear(){
        console.log("age",this.age) 
        return new Date().getFullYear() - this.age;
    }
    get fullName(){
        return this.firstName  + " " + this.lastName ;
    }
    set fullName(value){
        const [firstName,lastName]=value.split(' ');
        this.firstName=firstName;
        this.lastName=lastName;
    }
}


// const user1 = new CreateUser("Ehsan","Ansari",23);
// const user2 = new CreateUser("Arman","Ansari",17);


// class Student {
    //  constructor(firstName, lastName, age, std){
    //     this.firstName=firstName ;
    //     this.lastName=lastName ;
    //     this.age=age ;
    //     this.std = std;
    // }

    // getBirthYear(){
    //     console.log("age",this.age) 
    //     return new Date().getFullYear() - this.age;
    // }
    // get fullName(){
    //     return this.firstName  + " " + this.lastName ;
    // }
    // set fullName(value){
    //     const [firstName,lastName]=value.split(' ');
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    // }
// }

class Student extends User {

    constructor(firstName,lastName,age,std){
        super(firstName,lastName,age);
        this.std=std;
    }

    study(){
        console.log('studying...')
    }
}


const student1 = new Student("Ehsan","Ansari",17,'12th');
const student2 = new Student("Arman","Ansari",23,'MCA');

// class Employee{

    // constructor(firstName, lastName, age,company){
    //     this.firstName=firstName ;
    //     this.lastName=lastName ;
    //     this.age=age ;
    //     this.company=company;
    // }

    // getBirthYear(){
    //     console.log("age",this.age) 
    //     return new Date().getFullYear() - this.age;
    // }
    // get fullName(){
    //     return this.firstName  + " " + this.lastName ;
    // }
    // set fullName(value){
    //     const [firstName,lastName]=value.split(' ');
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    // }

// }


class Employee extends User {
    constructor(firstName,lastName,age,company){
        super(firstName,lastName,age);
        this.company=company;
    }
    work(){
        console.log('working...')
    }
}



const emp1 = new Employee("Ehsan","Ansari",17,'tcs');
const emp2 = new Employee("Arman","Ansari",23,'google');

// emp1.work();
