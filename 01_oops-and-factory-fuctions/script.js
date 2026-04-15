// const user1={
//     firstName:'Ehsan',
//     lastName:'Ansari',
//     age:21,
//     getAgeYear:function (){
//         return new Date().getFullYear() - user1.age;
//     }
// }
function createUser(firstName,lastName,age){
    const user={
        firstName:firstName,
        lastName:lastName,
        age:age,
        getAgeYear(){
            return new Date().getFullYear() - user.age;
        }
    }
    return user;
}

const user1 = createUser("Ehsan","Ansari",21);

