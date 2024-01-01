function addTwoNumbers(num1, num2) {
    let result = num1 + num2
    return result
}

// if we call the function like this then it will show nothing 
// addTwoNumbers()


// we can execute it this way
console.log(addTwoNumbers(2,7))


// --------*--------*----------*---------*-----------*----Rest/Spread_Opperator--------*----------*---------*------------*----------*---------

function calcCartPrice(value1) {
    return value1;
}
console.log( calcCartPrice(400, 500, 70, 1200) );

// On the above function we will get only One value as we have given only one parameter, but in case of adding thing to
// a cart in an E-commerce platform , we dont know how much items will get added.

// Hence we can write the code as 

function calcCartPrice_correctWay (...value) {
    return value
}

let total =  calcCartPrice_correctWay(400, 500, 70, 1200)
console.log(total)

// This will give us all the values in an array format, these 3 Dots we have put before the parameter is called rest/spread opperator.



// --------*--------*----------*---------*-----------*-----Adding_Objects_In_Functions------*----------*---------*------------*----------*---------

const user = {
    name: "RajMane",
    password: "1324@64",
    Email: "Rajmane7685@google.com"
}

function handleObj(anyObject){
    return `The User's Name is ${anyObject.name} and his password is ${anyObject.password}`
}

console.log(handleObj(user));


// --------*--------*----------*---------*-----------*-----Adding_Arrays_In_Functions------*----------*---------*------------*----------*---------

let myArray = [ 200, 300, 564, 768]

function getvalue(arrayval){
    return arrayval[1]
}


console.log(getvalue(myArray));
