// spread operator

// copying array
let fruits = ["Tomatoes", "Oranges", "Apples"]
let fruits2 = [...fruits];
console.log(fruits);


// joining arrays
let people = ["whites", "blacks", "mixedtypes"];
let continent = ["americans", "africans", ...people];
console.log(people)


//  joining 2 arrays

let evenNumbers = [2, 4, 6, 8, 10];
let oddNumbers = [1, 3, 7,]
let combined = [...oddNumbers, ...evenNumbers];
console.log(combined);