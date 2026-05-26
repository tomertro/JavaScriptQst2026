// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

function verifyUser(name,users){
  return users.some(user=> user.name.toLowerCase() === name.toLowerCase());
/*  const user = users.find(user=> user.name.toLowerCase() === name.toLowerCase());
  if(user != undefined) return true;
  return false;*/
}

const isFound = verifyUser('jack',users);
console.log(isFound);