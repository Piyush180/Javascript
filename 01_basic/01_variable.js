const accountId = 12345
let accontEmail = "pariaharpiyush1806@gmail.com"
var accountPassword = "25896"
accountCity = "jaipur"
let accontState;   // undefined 

/*
 prefer not to use var
because of issue in block scope and functional scope 
*/

// accountId = 2 // not allowed as accountId is saved in const 
console.log(accountId);

accountPassword = "22222"
accontEmail = "hc@hc.com"
accountCity = "jodhpur"

console.table([accountId, accontEmail, accountPassword, accountCity, accontState])
 
// node 01_basic/01_variable.js