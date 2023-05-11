// Union type ------------

// type NoobDeveloper = {
//     name: string;
//     level: number;
// }

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
// }

// const newDeveloper: JuniorDeveloper|NoobDeveloper = {
//     name:"Ashik",
//     level: 2,
//     expertise: "Javascript",
 
// }

//Intersection type--------------------

type NoobDeveloper = {
    name: string;
    level: number;
}

type JuniorDeveloper = {
    name: string;
    expertise: string;
    experience: number;
} 
// type NextLevelDeveloper = JuniorDeveloper & {
//     leaderShipExperience: number;
//     level1: string;
// }


//Enum type---------------------
enum Level {
    junior = "junior",
    mid = "Mid",
    senior = "Senior"
}

type AddType = {
    leaderShipExperience: number;
    level1: Level;
};
type NextLevelDeveloper = JuniorDeveloper & AddType;

const newDeveloper: JuniorDeveloper|NoobDeveloper = {
    name:"Ashik",
    level: 2,
    expertise: "Javascript",
 
}

const nextLevelDeveloper: NextLevelDeveloper = {
    name: "Atik",
    expertise: "Web developer",
    experience: 3,
    leaderShipExperience: 1,
    level1: Level.junior

}




