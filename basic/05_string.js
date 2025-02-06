const name = 'piyush';
const repoCont = 23

//  console.log( name + repoCont + ' value'); //                                            old/ bad syntax

//  console.log(`hello, my name is ${name} and my repo count is ${repoCont}`);  //          new/ good syntax


const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)              
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());                          // trim white space 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))                       // replace %20 by - gives, https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))                        // does url includes sundar in the string

console.log(gameName.split('-'));                         // hitesh-yt-parihar = hitesh yt parihar , spaces create kar diya 
