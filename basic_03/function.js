function AddTwoNumber(number1, number2){

   // console.log(number1+number2)

   //let result = number1+ number2;
   //return result;

   
   return number1 + number2
}

const result =  AddTwoNumber(3,4)              // execution
//console.log("Result : ", result);

AddTwoNumber                                  // reference


function logInUserMessage(username){
    if(!username){                                                              //if(username === undefined){}
        console.log("please enter the username")
        return
        
    }
    return `${username}, just logged in `

}

//console.log(logInUserMessage());


function calculateCartPrice (...num1){                          // ...num1 = rest and spread operator, combines all the value of array
    return num1;
}

//console.log(calculateCartPrice(200,400,800))



//+++++++++++++++++++++++++++++++++++++++      OBJECT PASS IN FUCNCTION        ++++++++++++++++++++++++



const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
