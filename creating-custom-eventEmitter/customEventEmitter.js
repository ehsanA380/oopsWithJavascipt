// class MyEventEmitter {
//     constructor(){
//         this._Events=[];
//         this.eventHadler=[];
//     }
//     on(eventListener, eventHadler){
//         this._Events.includes(eventListener)?'':this._Events.push(eventListener);

//         const eventData ={eventListener:[eventHadler]}
//         this.eventHadler.includes(eventListener)?this.eventHadler[eventListener].push(eventHadler):this.eventHadler.push(eventData)

//         // this.eventHadler.push(eventData);
//     }
//     emit(eventListener){
//         if(this._Events.includes(eventListener)){
//             this.eventHadler.forEach(element => {
//                console.log('elem=>',element)
//                })
            
//         }
//         console.log(this._Events)
//         console.log(this.eventHadler)
//     }
// }
// const emmiter = new MyEventEmitter();

// // console.log('hiiii')

// emmiter.on('abc',()=>{console.log('abc fired')})
// emmiter.on('abc',()=>{console.log('abc2 fired')})
// emmiter.on('abcd',()=>{console.log('abcd fired')})

// emmiter.emit('abc')


// eventHadler.push({'ehsan':['name']})

// console.log(eventHadler)

// console.log(eventHadler)


//======================= code by procodrr===============================================//


class MyEventEmitter {
    constructor(){
        this._events = {
            onceEvents:[]
        }
        
    }

    on(eventName,handler){
        if(this._events[eventName]){
            this._events[eventName].push(handler);
        }else{
            this._events[eventName] = [handler];
        }
    }
    emit(eventName, ...args){
        if(this._events[eventName]){
            this._events[eventName].forEach(handler => {
                handler(...args);
            });
            if(this._events.onceEvents.includes(eventName)){
                delete this._events[eventName]
            }
 
        }
    }
    once(eventName,handler){
        
        if(this._events[eventName] ){
            this._events[eventName].push(handler);
        }else{
            this._events[eventName] = [handler];
            this._events.onceEvents.push(eventName)
        }
    }
}


const emmiter = new MyEventEmitter();
emmiter.on('abc',()=>{console.log('hi abc')})

emmiter.on('x',()=>{console.log('x is emitted')})
emmiter.once('y',()=>{console.log('y is emited')})
emmiter.once('y',()=>{console.log('y 2 is emited')})

console.log(emmiter._events)
emmiter.emit('abc')
emmiter.emit('x')
emmiter.emit('y')
emmiter.emit('y')
console.log(emmiter._events)

