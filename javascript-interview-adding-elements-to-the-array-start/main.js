// Write a function which get's an array and an element
//  and returns a array with this element at the end
//pure function return same result with same argument does not modify the argumnet
const numbers = [1,2,3]
function append(arr,item){
    return [...arr,item];
    //const res =  [...arr];
    //res.push(item);
    //return res;
}

const result = append(numbers,10);
console.log('numbers:' ,numbers);
console.log('result:',result);