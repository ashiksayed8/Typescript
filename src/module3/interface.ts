// type alias with intersection with same work like interface with extended--
type User = {
    name: "Ashik";
    age: number;
}

type intersectionUser = User & {
    role: string;
}

const user6: intersectionUser = {
    name: "Ashik",
    age: 27,
    role: "2207503"
}


// Interface with extended-------------
interface IUser {
    name: string;
    age: number;
}

interface IExtendedUser extends IUser {
    role: string
}
// const userWithTypeAlias: User = {
//     name: "Ashik",
//     age: 27
// }
// const userWithTypeAlias1: IUser = {
//     name: "Ashikul",
//     age: 45
// }

const user5: IExtendedUser = {
    name: "Ashik",
    age: 27,
    role: "23334"

}

//Primitive data using with type alias but interface is not allowed----------.
type rollNumber = number;
type rollTrue = boolean;
type rollNumber1 = string;

//Object ,function, array as Object and I can use Interfece---

// Using Type Alias in function-------
type addNumbersType = (num1: number, num2: number) => number;
const addNumber1: addNumbersType = (num1, num2) => num1 + num2;


// Using Interface in function-----------------
interface IAddNumbers {
    (num1: number, num2: number):number;
}
const addNumber2: IAddNumbers = (num1, num2) => num1 + num2;

//Using Type Alias in Array---------
type arrayType1  = number[];
const rollNumbers1: arrayType1 =[1,3,5,5,6];

//Using interface in Array---------
interface IArrayType1{
    [index:number]: number;
}

const rollNumbers2: IArrayType1 =[12,3,5,5]