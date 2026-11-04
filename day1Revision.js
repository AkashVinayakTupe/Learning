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
