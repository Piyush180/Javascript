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

console.log(this);
