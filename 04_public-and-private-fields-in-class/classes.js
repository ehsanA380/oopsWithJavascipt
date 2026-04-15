// class CreateUser{
//     #age
//     #pvt = 'pvt-Val'
//     constructor(firstName,lastName,age){
//         this.firstName= firstName
//         this.lastName= lastName
//         this.#age= age
//     }
//     getBirthYear(){
//         return new Date().getFullYear() - this.age;
//     }
//     getFullName(){
//         return  this.firstName +' '+ this.lastName;
//     }
// }

// const user1 =new CreateUser("Ehsan","Ansari",21);
// const user2 =new CreateUser("Arman","Ansari",17);

// class Test extends CreateUser{
//     constructor(a,b,c){
//         super().age;
//         this.firstName=a
//         this.lastName=b
//         // this.#age=c
//         // console.log(this)
//     }
// }
// const test1 = new Test('ehsan','ansari',20);

// CreateUser.prototype.getBirthYear=function(){
//     return new Date().getFullYear() - this.age;
// }
// CreateUser.prototype.getFullName=function(){
//     return  this.firstName +' '+ this.lastName;
// }



// __________________REVISED CODE FROM HERE_____________________

class CreateUser{
   #age
   
    constructor(firstName, lastName, age){
        this.firstName=firstName ;
        this.lastName=lastName ;
        this.#age=age ;
    }

    getBirthYear(){
        console.log("#age",this.#age) 
        return new Date().getFullYear() - this.#age;
    }
    #getFullName(){
        return this.firstName  + " " + this.lastName ;
    }
}


const user1 = new CreateUser("Ehsan","Ansari",23);
const user2 = new CreateUser("Arman","Ansari",17);
// console.log(user1.#age)



// ____________inherit the class______

class Test extends CreateUser{
    constructor(a,b,c){
        super()
        this.firstName=a
        this.lastName=b
        // this.#age=c //---- private fiels can not be accessible in subclass
        console.log("this->",this)
    }
    checkThis(){
        console.log("check this out side the constructor=>",this)
    }
}
const test1 = new Test('Ehsan','ansari',20);































// class Test {
//   #x = 10;
//   getX() { return this.#x; }
// }

// const t = new Test();
// console.log(t.getX());   // ✅ 10
// console.log(t.#x);       // ❌ SyntaxError