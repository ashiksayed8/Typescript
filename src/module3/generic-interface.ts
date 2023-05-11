// Generic Interface-----------


interface CrushInterface<T, U = null> {
    name: string;
    husband: T;
    wife?: U
}


const crush11: CrushInterface<boolean,undefined> = {
    name: "ABC",
    husband: true,
}

const crush12: CrushInterface<string, null> = {
    name: "ABC",
    husband: "DDFG",
}

interface IhusbandTtpe {
    name: string;
    age: number
}

const crush14: CrushInterface<IhusbandTtpe, IhusbandTtpe> = {
    name: "asdf",
    husband: {
        name: "sssdd",
        age: 23
    },
    wife: {
        name: "sffh",
        age: 23
    }

}

interface IHusband {
    name: string;
    salary: number
}

const crush13: CrushInterface<IHusband ,string> = {
    name: "Acd",
    husband: {
        name: "bsh",
        salary: 123
    },
    wife: "ABC"
}