let users=["akash","sagar","roahan","ak"];

let user2=[...users];

console.log(user2);

users.push("somnath",
    "raj"
)
console.log(user2);

users.unshift(10);
console.log(users);


let fruits=["apple","apple","banana","mango"]
let count=0;
 
if (fruits.includes("apple")) {
    
count++;
}
console.log(count);


// let spliceSlice=fruits.splice(1,5);
// console.log(spliceSlice);

// let Slice=fruits.slice(1,2);
// console.log(Slice);

let MeargeArray=[...users,...fruits];

console.log(MeargeArray);


let string = "akasj";

console.log(string.split("").reverse().join(""));

let StringArray=Array.from("akash");
console.log(StringArray);

console.log(StringArray.reverse());


// let age="akasj";
let age=new Number(1222);
console.log(age);

