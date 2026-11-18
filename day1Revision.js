//Count Smallest Number From array

let Numbers=[10,1,2,0,20,50];
let smallNumber=Numbers[0];

for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i]<smallNumber) {
        smallNumber=Numbers[i];
    }
    
}
console.log(smallNumber);


// banana" mein "a" kitni baar aaya.

let Fruit="banana";
let count=0;

for (let i = 0; i < Fruit.length; i++) {
    if (Fruit[i]==="a") {
        count++;
        
    }
    
    
}
console.log(count);


let a=10;
for (let i = 0; i <= 10; i++) {
    let table=a*i
    console.log(table);
    
}


let counrword="AAkashTupe";

let Tolowwercase=counrword.toLocaleLowerCase();

let countsssss=0;
for (let i = 0; i < Tolowwercase.length; i++) {
  let counrwordextract=Tolowwercase[i]

    if (counrwordextract=="a") {
        countsssss++;
    }
    
}
console.log(countsssss);


let newStr="Akash";
let suubstre=newStr.substring(0,2);
console.log(suubstre);
