
// rest parameters
// function rest(x,y, ...numbers){
//     console.log(numbers)
//     console.log(x)
//     console.log(y)
//     total = 0;

//     for(const n of numbers){
//         total += n
//     }
//     return total;
// }

// const add = rest(1,3,5,8,10)
// console.log(add)

// rest parameters
function rest1(... even){

    console.log(even)
}
rest1(2,4,10);

// rest parameter

function rest2(... car){
    console.log(car)
}
rest2("BmW", "Toyota", "Vitz")


// rest parameter

function rest3(g,v,w,...glo){
    console.log(g)
    console.log(v)
    console.log(w)
    console.log(glo)
}
 rest3(3,7,2,)   



