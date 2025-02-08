// objects literals:



const Js_user = {}   // object


const mySym = Symbol("key1")                  // symbol declaration


const Js_user01 = {

    [mySym] : "mykey1",                       // symbol ki tarah acc karne ke lea [] me likhna padhta hai, nahi to vo string type of me aeega
    name: "piyush",
    email: "pariharpiyushsdfmaksd@gmail.com",
    age: 18,
    "full name": "Piyush Parihar",    // is value ko .fullname is acces hi nahi kar sakte

}
// object access methodes 
console.log(Js_user01.email);
console.log(Js_user01["email"]);
console.log(Js_user01["full name"]);

console.log(Js_user01[mySym]);
console.log(typeof Js_user01[mySym]);


Js_user01.email = "yuysuhs@haha.com"             // change value

Object.freeze(Js_user)                // abb js user ko koi change nahi nahi kar sakta 


Js_user01.greeting = function() {
    console.log(`hello js user, ${this.name}`);
    
}
console.log(Js_user01.greeting());
