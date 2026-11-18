function addnunmber(number1,number2){
    return number1+number2;
}
console.log(addnunmber("akash",20));


let cart=[10,20,30,60,0];
let total=0;

for (let i = 0; i < cart.length; i++) {
    total=cart[i]+total;
 
}
console.log(total);

// --------------------------------Arrow Functions -------------------------------------------------

let name="akashh"

let users=()=>{
    console.log(`Hello ${name} i am here`);
    // console.log(this);
    
}

users();

let calcualtions=(num1,num2)=>num1+num2;

console.log(calcualtions(10,20));


