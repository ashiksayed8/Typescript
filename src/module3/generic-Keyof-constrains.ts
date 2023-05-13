

//Key type of---------------------
type personType1 = {
    name: string;
    age: number;
    address: string;
}

type newType = "name" | "age" | "address"; //Nanually korsi--------------
const a: newType = "age";

type newTypeUsingKeyOf = keyof personType1;
const b: newTypeUsingKeyOf = "age";
age.toFixed;



// Keyof Using Object--------------------------

const addUser15 = <X, Y extends keyof X>(obj : X, key: Y) => {
    obj[key];
    //obj['age']
}

const result19 = addUser15({name: "Ashik", age: 27}, 'age');