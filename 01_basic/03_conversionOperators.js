let score = "33abc" // string hai ye kyu ki "" me hai

//          console.log(typeof score);
//          console.log(typeof (score));

let valueInter = Number(score)    // string ko number data type me convert kar diya 
//          console.log(typeof (valueInter));
//          console.log(valueInter);  //Number ko NaN me convert kar diya kyu ki orihinal me abc hai jo number nahi hai 
// agar score me value null hoti to output 0 ata

// "33" => 33 convert possible
// "33abc" => NaN ,  not possible 
let isloggedIn = 1
let booleanIsloggedin = Boolean(isloggedIn); // ye function isloggedin ko boolean bana raha hai 
//         console.log(booleanIsloggedin);


// 1 => true ; 0=> false
//"" => false
//"caudfa" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);




