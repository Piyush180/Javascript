const user = {
    username: "hitesh",
    price: 998,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);       // this current context ke lea hota hai (1/same scope me )
        // console.log(this);
        

    }


}

// user.welcomeMessage()
// user.username = "sam"                     // current content change kar diya 
// console.log(user.welcomeMessage())

// console.log(this);                            //{} kyu ki koi current context nahi hai 

// function chai(){                                   // functions me thsi kaam nahi karta
//     let username = "hitesh"
//     console.log(this.username);
// }


// const chai =  () => {                                // arrow function
//     let username = "hitesh"
//     console.log(this.username);
// }


// chai()


// ++++++++++++++++++++++++++++++++  ARROW FUNCTION ++++++++++++++++

const addNumbers (num1 , num2) => {

    return num1 + num2 
}                 
addNumbers(5,6)
console.log(addNumbers);
