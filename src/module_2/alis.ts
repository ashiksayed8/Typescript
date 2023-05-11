// Object type alias ----------

type CrushType  = {
    name: string;
    age?: number;
    profession: string;
    address: string
}

const crush1: CrushType = {
    name: "Ashik",
    age: 22,
    profession: "Web Develoment",
    address: "Bangladesh"
}

const crush2: CrushType = {
    name: "Atik",
    profession: "Student",
    address: "India"
}

//Boolean type alias-----------------
type IsCrushMarriedType = boolean;
const isCrushMarried: IsCrushMarriedType = false;

//String type alias------------------
type CourseNameType = string;
const courseName: CourseNameType = "Ashik";

//Function type alias---------------------
type FunctionType = (x: number, y: number) => number;
const calculate = (
     number1: number,
     number2: number,
     operation: FunctionType ) => {
     return operation(number1, number2);
}

calculate(10, 20, (x, y) => x + y);
calculate(20, 30, (x, y) => x - y);