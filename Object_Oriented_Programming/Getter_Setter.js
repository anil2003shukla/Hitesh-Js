class USer{
    constructor( email,password){
 this.email=email;
 this.password=password;

    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(email){
        this._email=email;
    }
    get password(){
        return `${this._password.toUpperCase()}`;

    }
    set password(value){
        this._password=value;
    }
}
const Anil=new USer('anil@gmail.com',"anilji");
console.log(Anil.password);
console.log(Anil.email);