
// [1,2,3,4,5] ke squares nikalo map se.
const Num=[1,2,3,4,5];

console.log(Num.map((Num)=>Num*Num));
 

// 2 Users ki list se sirf 18 se bade users filter karo.

const Users=[{name:"akash",age:18},{name:"Rohan",age:15},{name:"Sagar",age:19},{name:"Saurabh",age:10},{name:"Tejas",age:15},{name:"Chaitan",age:22}];

const Filter= Users.filter((Users)=>Users.age>=18);
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

const mergedObj={...obj1,obj2};

console.log(mergedObj);



// Ek function likho jo sentence mein sabse zyada baar aane wala word return kare.


const mostFrequentWord = (sentence) => {
  const words = sentence.toLowerCase().split(/\s+/);

  const count = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(count).reduce((a, b) =>
    count[a] >= count[b] ? a : b
  );
};

console.log(
  mostFrequentWord("hello world hello javascript hello")
);


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