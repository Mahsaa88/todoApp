// function sum(x,y) {
//     return x+y
// }

// const sum = (x,y)=>{
//     return x+y
// }

// const sum = x =>{
//     return x+y
// }

// const sum = x => x+y
// const sum = () => console.log("hello");

// map filter find forEach

let users = [
  { id: 1, name: "Zahra", age: 32 },
  { id: 6, name: "Zahra", age: 34 },
  { id: 2, name: "Mahsa", age: 23 },
  { id: 3, name: "Neda", age: 30 },
];

let items = users.filter((item) => item.name == "Zahra");

items.map((item) => console.log(item.id));

const name = "Zahra";
const userSite = name + "user";
const userSite1 = `${name}user`;


//true false
// status === true ? "undone" : "done";
// status ? "undone" : "done";

// status === false ? "undone" : "done";
// !status ? "undone" : "done";
const id=1;
const fname="Zahra"

const profile= {
  id:id,
  fname:fname
}
const profile2= {
  id,
  fname
}