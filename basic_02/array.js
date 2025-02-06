const myArr = [0,1,2,3,5]

const myArr2 = new Array(1, 2, 3, 4);
//+++++++++++++++++++++++++++++++++++   Array methods ++++++++++++++++++++++++++

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)   // 0 index pe 9 push
// myArr.shift()

// console.log(myArr.includes(9));    // check whether 9 is in array or not
// console.log(myArr.indexOf(3));     

 const newArr = myArr.join()         // adds all the element of  array into string

// console.log(myArr);
// console.log( newArr);



// ++++++++++++++++++++++++   SLICE SPLICE +++++++++++++++++++++++++++

// console.log("A ", myArr);

const myn1 = myArr.slice(1,3)   // return copy of section of a array,,,,, it inclueds 1,2 only indexes

 

// console.log(myn1);                         
// console.log("B ",myArr);


const myn2 = myArr.splice(1,3)           // return and modify original array , it includes 1,2,3 also



// console.log(myn2);
// console.log("C ", myArr);


