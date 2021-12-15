abstraction

function Employee(name ,age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    let kasimo = 5000;

    let getFinalSalary = function(){
        let finalSalary = salary + kasimo;
        console.log(finalSalary)
    }

     this.getDetails = function(){
        console.log("Name: " + this.name  +"\n age: " + this.age)
        getFinalSalary()
    }

}

let details = new Employee("Nabasagala", 23, 50000)
details.monthlyBonus = 1000
details.getDetails()