// Sort the array of numbers
// Sort array of objects by author's lastname
//sort is muted the exisiting array.
const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

function mySort(numbers){
  return numbers.sort((n1,n2) => n1 - n2 );
}

function sortBooks(books){
  return books.sort((b1,b2) =>{
    const last1 = b1.author.split(' ')[1];
    const last2 = b2.author.split(' ')[1];
    return last1 > last2 ? 1 : -1;

  })
  //my solution
  /*const names = books.map(book=> book.author);
  const lastNames = names.map(n => {
    const last =  n.split(' ');
    return last[1];
  });
  return lastNames.sort();*/
}

const sorted = mySort([4,0,3,1,6,4,2]);
console.log(sorted)
const result = sortBooks(books);
console.log(result);
console.log(books);
