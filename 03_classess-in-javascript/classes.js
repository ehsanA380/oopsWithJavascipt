class CreateUser{
    constructor(a,b,c){
        this.firstName=a;
        this.lastName=b;
        this.age=c;
    }
    getBirthYear(){
        return new Date().getFullYear() - this.age;
    }
    getFullName(){
        return  this.firstName +' '+ this.lastName;
    }
}

const user1 =new CreateUser("Ehsan","Ansari",21);
const user2 =new CreateUser("Arman","Ansari",17);


// CreateUser.prototype.getBirthYear=function(){
//     return new Date().getFullYear() - this.age;
// }
// CreateUser.prototype.getFullName=function(){
//     return  this.firstName +' '+ this.lastName;
// }