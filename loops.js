let akash=["name","age","number","address"
]

for (let i = 0; i < akash.length; i++) {
let array=akash[i];
console.log(array);
if (array==="name") {
    console.log("your name is akash");
    
}
    
}

for (let i = 1; i < 10; i++) {
    console.log(`table of ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(i+"*"+ j +"="+ i*j);
        
        
    }
}
let count=0;
for (let i = 1; i <=10; i++) {
    if (i%2==0) {
        count++
        console.log(i);
        
    }
    
}
    console.log(count);

    let word="aka";
    let revword=""

    for (let i = word.length-1; i >=0; i--) {
      revword +=word[i]
        
    }
    if (revword===word) {
            console.log("word is plendorme");
            
        }else{
            console.log("not");
            
        }


        let myObj={

            "name" :"akash",
            "age":29

        }
        for (const value in myObj) {
            console.log(value);
            
        
            let obj=myObj[key]
            if (obj=="akash") {
                console.log("congratulations akash you are selected as pm");
                
            }fil
            console.log(key,myObj[key]);
            
        }

        const map=new Map();
       map.set("namew","akash");
       map.set("age","29");
       map.set("add","ghandgewadi");

 

       for (const [key,value] of map) {
        console.log(key,value);
        
       }