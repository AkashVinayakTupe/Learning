
// [1,2,3,4,5] ke squares nikalo map se.
const Num=[1,2,3,4,5];

console.log(Num.map((Num)=>Num*Num));
 

// 2 Users ki list se sirf 18 se bade users filter karo.

const Users=[{name:"akash",age:18},{name:"Rohan",age:15},{name:"Sagar",age:19},{name:"Saurabh",age:10},{name:"Tejas",age:15},{name:"Chaitan",age:22}];

const Filter= Users.filter((Users)=>Users.age > 18);
console.log(Filter);


// 3  Cart ke prices ka total reduce se nikalo.

const product=[{pname:"laptop",price:120},{pname:"laptop",price:100},{pname:"laptop",price:200},{pname:"laptop",price:300}];

console.log(product.reduce((sum,product)=>sum+product.price,0));


// 4 {name, age, address: {city}} ko destructure karo.

const destructure={namee:"Akash", age:18, address: {city:"pune"}};

const {namee, age, address: {city}}=destructure;

console.log(destructure.address.city);


//5  Do arrays aur do objects ko spread se merge karo.

const array1=[10,20,3,40,60];
const array2=[20,30,60,40,80]

const MergedArray=[...array1,...array2]
console.log(MergedArray);


const obj1={namee:"Akash", age:18, address: {city:"pune"}};
const obj2={name:"Chaitan",age:22};

const mergedObj={...obj1,...obj2};

console.log(mergedObj);



// Ek function likho jo sentence mein sabse zyada baar aane wala word return kare.

function MostWordFromSentance(Sentance) {
    let words = Sentance.toLowerCase().split(" ");
    let count = {};
   let maxCount = 0;
   let maxWord = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
 
         if (count[word] === undefined) {
       count[word] = 1;
                         } else {
      count[word]++;
    }

         if   (count[word] > maxCount) {
                              maxCount = count[word];
      maxWord = word; 
       }
  }   

     return maxWord;
}

console.log(MostWordFromSentance("Hello World Hello Akaash"));


// 6  Product list se sirf in-stock items filter karo, phir unke prices nikalo, phir total karo (filter, map, reduce chain).


const products = [
  { name: "Shirt", price: 500, inStock: true },
  { name: "Shoes", price: 1500, inStock: false },
  { name: "Cap", price: 200, inStock: true },
];

const total = products
  .filter((product) => product.inStock)
  .map((product) => product.price)
  .reduce((sum, price) => sum + price, 0);

console.log(total);


let arr=["a","b","a","c","b","a"];
let count={};
let maxcount=0;

for (let i = 0; i < arr.length; i++) {
  const letters = arr[i];
  if (count[letters]===undefined) {

    count[letters]=1;

    
  }else{
    count[letters]++;
    
  }
  
}
console.log(count);



let a = [40, 9,20, 2, 7,15];
let countNumber=a[0];

for (let i = 1; i < a.length; i++) {
  const Number = a[i];

if (Number>countNumber) {

  countNumber=Number;
}
  
}
  console.log("Bigest Numbers is " + countNumber);

  let Numbersss=[10,20,330,40,50];
  let totalaa=0
  for (let i = 0; i < Numbersss.length; i++) {
     totalaa = totalaa+Numbersss[i];
    
  }
  console.log(totalaa);
  
  let evenNumber=[10,20,10,40,50];
  let evencount=0;

  for (let i = 0; i < evenNumber.length; i++) {

    
    if (evenNumber[i]%2==0) {
      evencount++;
    }
    
  }
  console.log(evencount);
  


  const Fruit=["banana","apple","banana","sitafhal","greps"];

  let counttttt=0
// let FruitCount=Fruit.filter((Fruit)=>Fruit==="banana");

// console.log(FruitCount.length);

for (let i = 0; i < Fruit.length; i++) {
 if (Fruit[i]==="banana") {
      counttttt++;
  
 }
  
}
console.log(counttttt);

//new code is commited





<<<<<<< Updated upstream
=======
git();


const users={
  name :"akash",
  age :18,
  email :"akash@gmail.com"
}

function getUsers(...getUsers){
return getUsers;


}


console.log(getUsers(users.age,users.name));
>>>>>>> Stashed changes
