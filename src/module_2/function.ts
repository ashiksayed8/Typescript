// Normal Function -------
function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(2,3)

// Arrow Function--------------------------------
const addArrow = (num1: number, num2: number): number => num1 + num2;
const arr = [1,3,4,5];
const newArray = arr.map((elem: number) => elem * elem);

//Object in function---------------

const person: {
    name: string;
    balance: number;
    addBalance(money: number): void
} = {
    name: 'Mezba',
    balance: 5,
    addBalance(money: number) {
        return `My new Balance is ${this.balance + money}`
    }
}

// Default parameter-----------------------
function add1(num1: number, num2: number = 10): number {
    return num1 + num2;
}
add1(30);

// spread operator------------------

const friend = ["A", "B", "C"];
const newFreind = ["D", "E", "F"];
friend.push(...newFreind);
console.log(friend)

//Rest Parameter------------------

const greetfriends = (
    friend1: string,
    friend2: string, 
    friend3: string): void => {
        console.log( `Hi ${friend1} \n Hi ${friend2} \n Hi ${friend3}`);
}

greetfriends("Ashik", "Atik", "Alif");

// Solve Problem--------------------

const greetfriends1 = (...friend: string[]) => {
    friend.forEach(friendElement => console.log(`Hi ${friendElement}`))
}

greetfriends1("Ashik", "Alif", "Aziz");

// Array And Object Destructure------------------

const newValue = ["A", "B", "C"];

const [bestValue, midFriend, lastFriend] = newValue;
console.log(bestValue);
console.log(midFriend);
console.log(lastFriend);

const man1 = {
    name1: "Ashik",
    age: 24
}

const {name1} = man1; //Do not need data type declear
const{age: ageValue, name1: fullName} = man1; // name alias
console.log(fullName);
console.log(ageValue);