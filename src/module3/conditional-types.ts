// A type is dependent on another type--------

type a1 = number;
type a3 = undefined;
type a4 = number;
type a2 = a1 extends string ? string : number;


//Nested conditional type-------------------

type d = a1 extends null
         ?null 
         : a4 extends number
         ? Number
         : never;




// type sheik = {
//     wife1: string;
//     wife2 : string;
// }

// type CheckProperty<T> = T extends {wife1: string} ? true : false;

// type Checkwife1 = CheckProperty<sheik>


// type sheik = {
//     wife1: string;
//     wife2 : string;
// }

// type CheckProperty<T, k> = T extends k ? true : false;

// type Checkwife1 = CheckProperty<sheik, "wife1">

// type sheik = {
//     wife1: string;
//     wife2 : string;
// }

// type A = keyof sheik;

// type CheckProperty<T, k> = k extends keyof sheik? true : false;

// type Checkwife1 = CheckProperty<sheik, 'wife1'>


///---------------

// type friends  = "Ashik"| "Atik"| "ANnis";

// type RemoveBadFriend<T> = T extends 'Ashik' ? never : T;


// type CurrentFriend = RemoveBadFriend<friends>;


//-----------
type friends  = "Ashik"| "Atik"| "ANnis";

type RemoveBadFriend<T, k> = T extends k ? never : T;


type CurrentFriend = RemoveBadFriend<friends, "Ashik">;