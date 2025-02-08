// object singletons: 

//const tinderUser = new Object()                         //singleton object

const tinderUser01 = {}                                 // non-singleton object   

tinderUser01.id ="1234sa"
tinderUser01.name = "Piyush"

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Piyush",
            lastname: "parihar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1:"a", 2:"b"}

const obj2 = { 3:"c", 2:"d"}

// const obj3 = Object.assign({},obj1,obj2);   // assign multiple obj combine kar karta hai
                                            // {} readable output aat hai, sare obj1obj2 ki value {} me aeegi,
                                            // {} mahi denge to sari value obj1 me ja rahi hai


const obj3 = {...obj1,...obj2};                    //Spread opeator

console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));                    // key feild
// console.log(Object.values(tinderUser));                 // key feild value 
// console.log(Object.entries(tinderUser));               //every key value into a array
//console.log(tinderUser01.hasOwnProperty('name'))