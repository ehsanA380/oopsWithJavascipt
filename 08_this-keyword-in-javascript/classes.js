// function hi (){
//     console.log(this)

// }
// hi()


// const user = {
//     firstName:'Ehsan',
//     lastName: 'Ansari',
//     fullName(){
//         return `${this.firstName} ${this.lastName}`;
        
//     }
// }
// const user = {
//     firstName : 'Ehsan',
//     lastName : 'Ansari',
//     // fullName(){
//     //    function getAge(){
//     //     console.log('getting age');
//     //     console.log(this);// here this keyword -> point to window
//     //    }
//     //    getAge();
//     //    console.log(this) // here this keyword -> point to user object
//     // }
//     tags:['a','b','c','d'],

//     printTags(){
//         this.tags.forEach(function(tag){
//             console.log(this, tag)      // here this keywork -> point to user object becacuse we specify the return object in @sthisArg
//         },this) // <------ here @thisArg
//     }

// }

const body = document.querySelector('body');

// body.addEventListener('click',function(e){
//     console.log(e.target) // it points to that element where it has been clicked
//     console.log(this)     // it points to body
// })

// body.addEventListener('click',(e)=>{
//     console.log(e.target) // it points to that element where it has been clicked
//     console.log(e.currentTarget);// it points to whom where eventlister has been applied
//     console.log(this)     // it points to body
// })


class user {
    constructor(){
        this.firtName = 'Ehsan';
        console.log(this);
    }
    getUser(){
        console.log(this)
    }
}