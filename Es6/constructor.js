// how to us a constructor function
class Ronald{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }

    getAge(){
        return this.age
    }
    
}
let newRony = new Ronald("Mic", 20);
console.log(newRony.getAge())