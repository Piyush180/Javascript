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
    if(!username){                                                              //if(username === undefined)
        console.log("please enter the username")
        return
        
    }
    return `${username}, just logged in `

}

console.log(logInUserMessage());