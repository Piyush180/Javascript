const marvel = [ 'iroman', 'thor', 'captain'];
                       // console.log(marvel);

const dc = ['superman', 'flash', 'batman' ];

const all_heroes = marvel.concat(dc)

 //marvel.push(dc)

                      // console.log(marvel);
                      // console.log(all_heroes);


const all_new_heroes = [...marvel, ...dc]  // combine both the array

                       // console.log(all_new_heroes);
const another_array = [ 1,2,3,[5,6],9,[5,6,[1,2]]]

const real_another_array = another_array.flat(Infinity);         // flat: returns a new array with all contancatinated array seperatly
                    //console.log(real_another_array);

 let score1 = 100;
 let score2 = 200;
 let score3 = 500;
 
 console.log(Array.of(score1, score2, score3))  // .of multiple value ko single array me combine kar deta hai