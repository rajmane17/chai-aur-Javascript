const arr = [1, 2, 3, 4, 5, 6]

arr.forEach( function (item){
    console.log(item);
})

arr.forEach( function (item, index, arr){
    console.log(item, index, arr);
})

const language = [

    {
        name: "RajMane",
        "Roll_NO." : 17,
    },
    {
        name: "Akshay",
        "Roll_NO." : 16,
    },
    {
        name: "aarav",
        "Roll_NO." : 10,
    },
]

language.forEach( (item) => {
    console.log(item["Roll_NO."])
})