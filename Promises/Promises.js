//Consuming a promise

const cart = ["shoes", "Mobile", "Earphone"]

// we are returning here a promise at each step 
createOrder(cart)
.then(function (orderId){
   return  ProccedToPayment(orderId);
})
.then(function (paymentInfo){
   return showSummary(paymentInfo)
})
.then(function(paymentInfo){
    return updateWallet(paymentInfo)
})

// creating a promise 

createOrder(cart) {
    const promiseOne = new promise(function (resoleve, reject
    })
}