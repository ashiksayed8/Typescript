//const rollNumber: number[] =[1,2,3,5,6];
// const rollNumber1: Array<number> = [1,3,4,5];

// const nameFriends: Array<string> = ["Ashik", "Atik", "Aziz"];

// const user7: {name: string,age: number}[]
// = [{name: "Ashik", age: 25}, {name: "Atik", age: 27}];

// const user7: Array<{name: string, age: number}> = [{name: "Ashik", age: 27}, {name: "Atik", age: 27}];

type genericArray<T> = Array<T>

const rollNumber1: genericArray<number> = [1,3,4,5];
const nameFriends: genericArray<string> = ["Ashik", "Atik", "Aziz"];


type objectType = {name: string, age: number};

const objectUsers: genericArray<objectType> = [{name: "Ashik", age: 27}, {name: "Atik", age: 27}];