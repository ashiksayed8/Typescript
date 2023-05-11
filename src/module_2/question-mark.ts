
//Ternary operator-----------------
const age: number = 22;

// if(age >= 18) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

const isAdult = age >= 34? "Yes" : "No";
console.log(isAdult);


//Nullish Coalesnance Operator-----------
//Null and Undefined-------------

const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({userName} , {userName2});


type Manush = {
    name: string;
    age: number;
    address: {
        city: 'No city';
        road: "No road";
        home?: ""
    };
}

const manush1: Manush = {
    name: "Ashik",
    age: 27,
    address:{
        city: "No city",
        road: "No road",
        
    }
}

const home= manush1?.address?.home ?? "No home"
console.log(home);