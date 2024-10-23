class student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    get BirthYear(){
        return `${this.name} ${this.age}`; 
    }
    set BirthYear(value){
        const splited = value.split(' ');
        this.BirthYear = splited[0];
        this.BirthYear = splited[1];
    }
}
const user1 = new student("Saliram",22);
console.log(user1);
const user2 = new student("Sushil",23);
console.log(user2);
const user3 = new student("Dinesh",24);
console.log(user3);