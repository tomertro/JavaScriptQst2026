// Write a function which can concatenate 2 arrays
const arr1 = [0,1];
const arr2 = [2,3];

function concatenateArrays(arr1,arr2){
    //concat does not modify the array
    //return arr1.concat(arr2);
    return [...arr1,...arr2];
    /*const clone1 = [...arr1];
    const result = clone1.concat(arr2);
    return result;*/
}

const res = concatenateArrays(arr1,arr2);
console.log(res);