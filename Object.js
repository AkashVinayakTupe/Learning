let newObj=new Object();

newObj.name="akash";
newObj.IsLogin=false;
newObj.Fullname = function () {
    return {
        fullname: "akash vinayak tupe",
        age: 25
    };
};
console.log(newObj.Fullname().fullname);
console.log(newObj.Fullname().age);



// if (!newObj.IsLogin) {

//     console.log("Please Login to system");
    
    
// }
// else{
//     console.log(`Thankyou for login ${newObj.name}`);
    
// }

// console.log(newObj.IsLogin?.userlogged.pelaselogin);

let obj1={name:["akasj","sagar","Rohan"],age:25,age:25}
let obj2={city:"pune",age:25}
let obj3=Object.assign({},obj1,obj2);
console.log(obj3);

let usersss=[
     {
        name:"akash",
        age:25,

    },
     {
        name:"rohan",
        age:25,

    },
     {
        name:"sanage",
        age:25,

    },

]

console.log(usersss[0].name);
console.log(Object.values(usersss));


// let usersName = usersss.map(user => user.name);
// console.log(usersName);

const users="Akash";

const usersData={};

// users="somnath";

usersData.name="somnath";
console.log(usersData);

usersData.name="Akash";

console.log(usersData);

console.log(usersData.hasOwnProperty('name'));



