//      console.log("2" == 2 ); // true 
//      console.log("2" === 2); // false as (===) it check data typw also 
/*
const id = Symbol('123')

const accId = Symbol('123')

//       console.log(id === accId);

/**************************NON PREEMETIVE DATA TYPE************************* 

const skills = ["js", " react", "c++"]; // array

let myObj{                
 name = " caydfdsj",
 age = 23,
};    
                                   // object
*/

//  const myFunction = Function(){          // function
//            console.log("hello world");}
    





/*************************MEMORY SAVING ************************************** */

/*************STACK (preemetive) AND HEAP(non preemetive) ******************* */

let youtubeName = "Piyush";
 
let anotherName = youtubeName;   // yaha pe youtubeName ki copy save hogi, original name nahi 
anotherName = "pariahar"         // anotherName update ho gaya or stack top se youtubeName ki copy pop ho gai 

//console.log(youtubeName);
//console.log(anotherName);


/*  HEAP*/
let useOne = {
    email : "piyushpariahr@gmail.com",
    upi : "ajdskj@zl"
}
 
let useTwo = useOne; // abb ye useOne se copy nahi kar raha, userOne ki value loc se ref leke output de raha hai 

useTwo.email = "pariahr@ink" // indirectly apan ne ref value update ki hai to dono me same output aeega
//console.log(useOne.email);
//console.log(useTwo.email);

