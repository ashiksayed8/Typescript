//Arrow function using generic---------------

// const createArray = <T>(param: T): T[] => {
//     return [param];
// }


// const result12 = createArray<string>("Bangladesh");
// const result13 = createArray<boolean>(true);
// const result14  = createArray<number>(40);

// type personType = {
//     name: string;
//     age: number
// }
// const result15 = createArray<personType>({name: "abc", age: 23});


//Tuple in arrow function------------------

// const createArray = <X,Y>(param1: X, param2: Y): [X,Y] => {
//     return [param1, param2];
// }


// const result12 = createArray<string, string>("Bangladesh", "Ashik");
// const result13 = createArray<boolean, Array<string>>(true, ['Ashik']);
// const result14  = createArray<number, number>(40,45);

// type personType = {
//     name: string;
//     age: number
// }
// const result15 = createArray<personType, string>({name: "abc", age: 23}, "Asik");

//Spread Operator------------------
// const nameFriend = "Aziz";
// const myInfo = {
//     name: "Ashik",
//     age:27,
//     salary: 10000
// }

// const newData = {...myInfo, nameFriend};
// console.log(newData);


// Same work using Function into spread operator------
const addMeFriend = <T>(param: T) =>{
    const friend = "Aziz";
    const newData ={...param, friend};
    return newData;
}

const myInfo = {
    name: "Ashik",
    age:28,
    salary: 10000
}

const result16 = addMeFriend(myInfo);
console.log(result16);



//Tuple in Normal function function------------------

function createArray<X,Y>(param1: X, param2: Y): [X,Y] {
    return [param1, param2];
}


const result12 = createArray<string, string>("Bangladesh", "Ashik");
const result13 = createArray<boolean, Array<string>>(true, ['Ashik']);
const result14  = createArray<number, number>(40,45);

type personType = {
    name: string;
    age: number
}
const result15 = createArray<personType, string>({name: "abc", age: 23}, "Ashik");