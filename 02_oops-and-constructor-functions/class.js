// class CreateUser {
//     constructor(firstname,lastname,age){
//         this.firstName=firstname;
//         this.lastName=lastname;
//         this.age=age;
//     }
//     getBirthYear(){
//         return new Date().getFullYear() - this.age;
//     }   
//     getFullName(){  
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const user1 =new CreateUser("Ehsan","Ansari",21);
// const user2 =new CreateUser("Arman","Ansari",17);



// __________________REVISED CODE FROM HERE_____________________

class CreateUser{

    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getBirthYear () {
        return new Date().getFullYear() - this.age;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }


}

// CreateUser.prototype.sum=function(a,b){
//     console.log(a+b);
    
// }


const user1 =new CreateUser("Ehsan","Ansari",21);
const user2 =new CreateUser("Arman","Ansari",17);