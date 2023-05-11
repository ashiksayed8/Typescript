//Nullable type--------------------

const searchName  = (value: string | null) => {
    if(value == null) {
        console.log("There is nothing to search");
    } else {
        console.log("Searching..........");
    }
}

searchName(null);

//Unknown type----------------------------

const getMySpeed = (speed: unknown) => {
 if(typeof speed == 'number') {
    const convertSpeed = (speed * 1000) / 3600;
    console.log(`My speed is ${convertSpeed}`);
 }
 else if(typeof speed == 'string') {
    const value = speed.split(' ');
    const convertSpeed = (parseFloat(value[0]) * 1000) / 3600;
    console.log(`My speed is ${convertSpeed}`);
 }
 else {
     console.log(`There is never type`);
 }
}

getMySpeed(10);
getMySpeed('10 kmh^-1');
getMySpeed(true);

//Never type-----------------------------
function thowError(message: string): never {
    throw new Error(message);
}
 thowError('Error hohasa');
