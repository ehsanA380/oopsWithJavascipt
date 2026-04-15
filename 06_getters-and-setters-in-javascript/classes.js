
class CreateUser{

    constructor(firstName, lastName, age){
        this.firstName=firstName ;
        this.lastName=lastName ;
        this.age=age ;
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


const user1 = new CreateUser("Ehsan","Ansari",23);
const user2 = new CreateUser("Arman","Ansari",17);


// const user = {
//     firstName: 'Ehsan',
//     lastName: 'Ansari',
//     get fullName() {
//         // console.log('getting............')
//         return `${this.firstName}  ${this.lastName}`;
//     },
//     set fullName(value){
//         console.log("setting..............")
//         // const spiltted = value.split(' ');
//         const [firstName,lastName] = value.split(' ');
//         console.log(value)
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// }
// console.log(user.fullName)

// user.fullName = 'rohit singh'