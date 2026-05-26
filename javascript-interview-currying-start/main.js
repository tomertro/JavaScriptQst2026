// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Create a curry function
// What can your curried function do?

//Collects arguments gradually
//Checks if enough arguments were supplied
//If yes → runs the original function
//If not → returns another function waiting for more arguments
//So currying is mostly valuable when:

//creating reusable configured functions
//functional programming
//composing operations
//advanced callback patterns

function curry(fn){
    let numOfArgs = fn.length;
    return function curried(...args){
       if(args.length >= numOfArgs ){
           return fn(...args);
       }
       else{
        return function (...moreArgs){
            let concatenatedArgs = moreArgs.concat(args);
            return curried(...concatenatedArgs);
        }
       
       }
    }
}
function multiplay(a,b,c){
    return a*b*c;
}
function buildName(first, middle, last) {
    return `${first} ${middle} ${last}`;
}

let corriedFunc = curry(multiplay);
//const part1 = corriedSum(1);

 console.log(corriedFunc(2)(3)(4));
 corriedFunc = curry(buildName)
 console.log(corriedFunc('tomer','','Trojman'))