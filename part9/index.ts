const arr : (string | number)[] = [//": (string | number)[]" - pode ser um array de string e de numbers
    "FOO",
    32.3
];

arr.push('foo');
arr.unshift(445);

//arr.push(false); //ERROR: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

//type com VALORES..

let positions : ("left" | "center" | "right");

positions = "center";
positions = "left";
positions = "right";

//positions = "floor"; // ERROR: Type '"floor"' is not assignable to type '"left" | "center" | "right"'.