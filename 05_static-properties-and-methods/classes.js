
class CreateUser{

    constructor(firstName, lastName, age){
        this.firstName=firstName ; // herer this -> point to retuned object by consturtor when the class called with the help of new keyword
        this.lastName=lastName ;
        this.age=age ;
    }

    static run = "running";

    static{
        console.log("this from static",this)
        this.hi="hello"; // here this -> point to class 
        this.sum= function(a,b){
            console.log("thisfrom sum",this)
            return a+b;
        }
    }

    getBirthYear(){
        console.log("age",this.age) 
        return new Date().getFullYear() - this.age;
    }
    #getFullName(){
        return this.firstName  + " " + this.lastName ;
    }
}


const user1 = new CreateUser("Ehsan","Ansari",23);
const user2 = new CreateUser("Arman","Ansari",17);




