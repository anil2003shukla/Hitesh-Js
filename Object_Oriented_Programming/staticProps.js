class User{
    constructor(name){
        this.name = name;
    }
    logMe(){
        console.log(this.name);
        
            }
         static   createId(){
                return `1234`
            }
}
const Anil = new User('John');
Anil.logMe();
// console.log(Anil.createId());
class Teacher extends User{
    constructor(name,Email){
        super(name);
        this.Email = Email;


    }
}
const Shukla=new Teacher("Shukla",'shukla@gmail.com');
Shukla.logMe();
console.log(Shukla.createId());