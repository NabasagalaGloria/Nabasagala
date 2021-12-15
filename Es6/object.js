// object literals
let person = "Gloria";
let pay = 100000;
let personPosition = "secretary";

let personObject = {
    person,
    pay,
    personPosition
}

console.log(personObject.person)
console.log(personObject.pay)
console.log(personObject.personPosition)


// object literal
let studentName = "Naba Gloria";
let stream = "S.A";
let grade = "first grade";
let gmail =  "nabagloria01.com";

let studentDetails = {
    studentName,
    stream,
    grade,
    gmail,

    login(){
        console.log(`${gmail} is your email.`)
    }
}

studentDetails.login()
console.log(studentDetails.studentName)
console.log(studentDetails.stream)
console.log(studentDetails.grade)


// object literal with function
let num1 = 8;
let num2 = 10;
let num3 = 20;
let num4 = 30;

let addNumbers = (num1,num2,num3,num4) => {

        
    return {
        
        num1,
        num2,
        num3,
        num3,
        
    }

}
let sumOfAllNumbers = num1 + num2 + num3 + num4 
console.log(sumOfAllNumbers)
