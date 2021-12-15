// classes
class me{
    constructor(name,id,residence,nationality){
        this.name =name;
        this.id = id;
        this.residence = residence;
        this.nationality = nationality
    }


}
let mee = newperson("Nabasagala", "Ug2/546", "Kulambiro", "Ugandan");
console.log(me);

// classes with constructors
class User{
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getInformation(){
        console.log("your username is ", this.username )
    }

    getPersonalDetails(){
        console.log("your email is ", this.email, " and password is", this.password  )
    }
}

let glo = new User("Gloria", "gloriagmail.com", "we7685");
glo.getInformation()
glo.getPersonalDetails()

// classes
class Employees{
    constructor(gmail,passWord){
        this.gmail = gmail;
        this.passWord = passWord;
    }

    getInformation(){
        console.log("your email is ", this.gmail )
    }

    getPersonalDetails(){
        console.log("your email is ", this.gmail, " and password is", this.passWord  )
    }
}
