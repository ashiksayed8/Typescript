

type mendatoryType = {name: string, age: number, salary: number};
// interface MendatoryInterface  {name: string, age: number, salary: number};

const addFriendName = <T extends mendatoryType> (friends: T) => {
    const freind = "Aziz";
    const newData = {...friends, freind};
    return newData;
}


type myInfoType1 ={
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other: null
}
const myInfo1 = {
    name: "Ashik",
    age: 27,
    salary: 10000,
    //other1: true,
    // other: null
}

const reust18 = addFriendName(myInfo1);
