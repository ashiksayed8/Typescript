// const arrayNumber = [1,2,3,4];

// const arrayOfConstant = arrayNumber.map((number) => number.toString());

// console.log(arrayOfConstant);


// type AreaNumber  = {
//     height: number;
//     width: number;
// }

// type A = AreaNumber['height'];// Look up types
// type B = keyof AreaNumber;

// type AreaString  = {
//     height: string;
//     width: string;
// }

// type readOnly  = {
//     height: number;
//     width: number;
// }

// const rectangular: readOnly = {
//     height: 10,
//     width: 5
// }



//Typing daynamic using map type----------------

// type valume = {
//     height: number;
//     width: string;
//     deepth: number;
// }

// type  Area = {
//     [key in keyof valume]: valume[key];
// }

type valume = {
    height: number;
    width: string;
    deepth: number;
}

type  Area<T> = {
    readonly [key in keyof T]: T[key];
}


const area111 : Area<{height: number, width:Number}> = {height: 20, width: 10};
