function createUser(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}
createUser.prototype.getBirthYear=function(){
    return new Date().getFullYear() - this.age;
}
createUser.prototype.getFullName=function(){
    return  this.firstName +' '+ this.lastName;
}



const user1 =new createUser("Ehsan","Ansari",21);
const user2 =new createUser("Arman","Ansari",17);

