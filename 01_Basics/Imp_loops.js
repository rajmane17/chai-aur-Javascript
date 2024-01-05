const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
};

const greeting = "Hello World"

for (const greet of greeting) {
    // console.log(greet);
}

//Maps

const map = new Map()
map.set("IN", "India");
map.set("USA", "United States Of America")
map.set("FR", "France")

// console.log(map)

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`)
}

const myObject = {
    game1: "PUBG",
    game2: "COC",
    'game3': "spiderman"
}

// for of loop maps ke lie to kam kar raha tha lekin vo objects ke lie kam nhi aaya
// here we will get an error as the myObject is not iterable.


// for (const data of myObject) {
    //     console.log(data)
// }


// --------*--------*----------*---------*-----------*-----------*----------*---------*------------*----------*---------

const myObject2 =  {
    js: "Javascript",
    py: "python",
    cpp: "C++",
}

for (const key in myObject2) {
    // console.log(`${key} shortcut is for ${myObject2[key]}`);
}


let arr_two = ["raj", "sneha", "mithilesh", "flash"]

for (const key in arr_two) {
//    console.log(key)
//    console.log(arr_two[key])
}