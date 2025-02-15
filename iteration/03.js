// for of                   used for arrays


const greeting = "hello"
for (const greet of greeting) {
    // console.log(`each element is ${greet}`)
    
}

// ++++++++++++++++++++++++++++    MAPs ++++++++++++++++++++++++


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {                                    // maps iteratable hai, for loop nahi 
    game1: 'NFS',
    game2: 'Spiderman'         
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }