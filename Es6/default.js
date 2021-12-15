// default
   function add (x,r,y){
       console.log(x)
       console.log(r)
       console.log(y)
   }
   add(7,9.5,7)


//default parameter
let muil = (v=5,t=8,w=10) => {
    let multiply = v*t*w;
    console.log(multiply)
}
muil(6,8,4)


// default parameter
let sub = (a=8) => a+4
console.log(sub())