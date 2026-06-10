// Remove all duplicates in the array

function removeDuplicates(arr){
return arr.reduce((res,item)=>{
    if(!res.includes(item)){
        return [...res,item];
    }
    else
        return res;
},[]);
//best solution
//return [...new Set(arr)];
//my solution
/* const uniqueArr = [];
 arr.forEach(element => {
    if(!uniqueArr.some(n=> n === element)){
        uniqueArr.push(element);
    }
 });
 return uniqueArr;*/
}

const result = removeDuplicates([1,3,4,1,6,3]);
console.log(result);
