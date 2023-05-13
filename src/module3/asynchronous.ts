
//JSON Place Holder ----------

// type userType = {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean
// }
interface userType {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const getTodo = async(): Promise<userType> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();

}

const getToData = async(): Promise<void> => {
    const result = await getTodo();
    console.log(result);
}


//Asynchronous in string type-------------------------------
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = " Data is facted";
        if(data) {
            resolve(data);
        } else {
            reject("failed to fetch data!");
        }
    });
}

const getPromiseData = async(): Promise<string> => {
    const reust19 = await makePromise();
    return reust19;
};

//Asynchronous in boolean type-------------------------------
const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if(data) {
            resolve(data);
        } else {
            reject("failed to fetch data!");
        }
    });
}


const getPromiseDataBoolen = async(): Promise<boolean> => {
    const reust21 = await makePromiseBoolean();
    return reust21;
};

//Asynchronous in object type-------------------------------

type objectType1 = {
    data: string;
}
// interface objectType1 = {
//     data: string;
// }
const makePromiseObject = (): Promise<objectType1> => {
    return new Promise<objectType1>((resolve, reject) => {
        const data: objectType1 = {data : "Ashik"};
        if(data) {
            resolve(data);
        } else {
            reject("failed to fetch data!");
        }
    });
}


const getPromiseDataObject = async(): Promise<object> => {
    const reust22 = await makePromiseObject();
    return reust22;
};