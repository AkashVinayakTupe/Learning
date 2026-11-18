const number=[10,20,30,4,5,66];
const filter=number.filter((GreterNumber)=>GreterNumber>10);
console.log(filter);

const newarr=[];
// number.forEach(element => {
//     if (element>0) {
//     newarr.push(element)
        
//     }
// });

for (let i = number.length-1; i >= 0; i--) {
    newarr.push(number[i]);
    
}
console.log(newarr);

const Books=[{title:"ajash",price:"200"},{title:"chave",price:"100"},{title:"rahi",price:"300"},{title:"kille",price:"400"}];
const newbk=Books.filter((bk)=>bk.price=="100")

console.log(newbk);


const MapNumbers=number.map((Add)=>Add+10);
console.log(MapNumbers);

number.forEach((members)=>console.log(members)
);
