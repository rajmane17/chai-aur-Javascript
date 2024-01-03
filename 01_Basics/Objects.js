const User = {
    Name: "RajMane",
    Id: "Rajmane54",
    password: "12345678",
    "age": 18,
}

console.log(User.Name);
console.log(User["password"]);

// We can call age using this type of syntax only and not with dot method
console.log(User["age"])

User.Id = "Rajmane17"

console.log(User.Id);

// This freezes the object we have made and we cant make any changes in the object
Object.freeze(User);

User.password = "7977965884"
console.log(User["password"])

// --------*--------*----------*---------*-----------*-----------*----------*---------*------------*----------*---------


// This is a way of creating a singleton object
const TinderUser = new Object;
console.log(TinderUser);

// Combining two objects 

const obj1 = {1: "a", 2:"b", id1:"123xyz@"}
const obj2 = {3: "c", 4:"d", id2:"@zyx321"}

//one way of combining two objects
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// 2nd way of combining two Objects
const obj3 = {...obj1, ...obj2}
console.log(obj3)

// -----*------*-----This part is very Important we are gonna use this in projects and data base----*-------*------*------

//Jb hume data-base se data milta hai to  vo is format me hota hai
const Data = [
    {
        Id: 1,
        Name: "sam"
    },
    {
        Id: 2,
        Name: "Raj"   
    },
    {
        Id: 3,
        Name: "anushka"
    },
]

// we can get that data like this
const data1 = Data[0].Name;
console.log(data1);