// function createUser(firstName,lastName,age){
//     const user={
//         firstName:firstName,
//         lastName:lastName,
//         age:age,
//         // getBirthYear:createUser.commonMthods.getBirthYear
//     }
//     return user;
// }
// createUser.commonMthods={
//      getBirthYear(){
//         return new Date().getFullYear() - this.age;
//     }
// }

// function createUser(firstName,lastName,age){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
// }
// createUser.prototype.getBirthYear=function(){
//     return new Date().getFullYear() - this.age;
// }
// createUser.prototype.getFullName=function(){
//     return  this.firstName +' '+ this.lastName;
// }



// const user1 =new createUser("Ehsan","Ansari",21);
// const user2 =new createUser("Arman","Ansari",17);


// __________________REVISED CODE FROM HERE_____________________

// function getBirthYear(){
//     console.log(this)
//     return new Date().getFullYear() - this.age;
// }

// function createUser(firstName,lastName,age){
//     console.log(this)
//     const user = {
//         firstName,
//         lastName,
//         age,
//         // getBirthYear:createUser.commonMethods.getBirthYear
//     }
//     return user;
// }
function CreateUser(firstName,lastName,age){
    this.firstName= firstName,
    this.lastName= lastName,
    this.age=age
    
}

CreateUser.prototype.getBirthYear= function(){
    // console.log(this)
    return new Date().getFullYear() - this.age;
}

CreateUser.prototype.getFullName= function(){
    // console.log(this)
    return this.firstName + " " + this.lastName;
}

// createUser.commonMethods = {
//     getBirthYear(){
//     console.log(this)
//     return new Date().getFullYear() - this.age;
//   }
// };


// function sayHi(){
//     console.log(this)
//     console.log('hiiii')
//     return 'hello';
// }

// const user = new CreateUser('Ehsan')
const user1 =new CreateUser("Rohan","Ansari",21);
const user2 =new CreateUser("Arman","Ansari",17);

