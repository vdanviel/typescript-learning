//Tuple Types

//A tuple type is another sort of Array type that knows exactly how many elements it contains,
//and exactly which types it contains at specific positions.

let StringNumberPair : [string, number];

StringNumberPair = ["Vix", 21];

let rgb : [number, number, number] = [227,332,12];

//usefull to set sereval types of respectively 
type User = [number, string, string];

//example: a user with id / name / birth..
const newUser : User = [22223434, "victor", "2002-08-21"];