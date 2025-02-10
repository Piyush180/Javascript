//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


//+++++++++++++++++++++++++++++++++++++++++  NESTED SCOPE ++++++++++++++++++++++++++

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



//+++++++++++++++++++++++++++++++++++++++ Interesting  ++++++++++++++++++++++++++++++++++++++


addone(5)                                   // kyu ki addone to apan ne kisi me hold  nahi kiya (like cosnt,let), ye run hoga
function addone(num){
    return num + 1
}

addone(5)


addtwo(9)                                  // const me hold kiya hai islea ye run nahi 
                                            //  hoga kyu ki addtwo pehle acces hoga to usse function nahi milega

const addtwo = function(num){
    return num + 2
}

