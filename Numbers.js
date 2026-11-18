
let balance = 1000;

function BankBalance(balance) {
    let Updatedbalance = balance - 100;
    return Updatedbalance;
}

function SubBalance(Subbalance) {
    return BankBalance(Subbalance);
}

console.log( SubBalance(1000));

console.log(SubBalance(1000).toFixed(2));

console.log(Math.round(Math.random()*10000+1));

console.log(Math.floor(Math.random()*10000+1));


let date=new Date();

console.log(date.toDateString());

console.log(date.getFullYear());

date.setFullYear(2025)
console.log(date.getFullYear());





