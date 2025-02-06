let myDate =  new Date()

//   console.log(myDate.toString());
//   console.log(myDate.toISOString());
//   console.log(myDate.toJSON());
//   console.log(myDate.toLocaleDateString());
 
// console.log(typeof myDate);                               // object


let myTimeStamp = Date.now();


// console.log(myTimeStamp);
 console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // seconds as /1000

myDate.toLocaleDateString(`defauly`, {
    weekday : 'long'                                   // mydate se jo date milegi usko modify kar diya or abb weekday lon me milenge
})