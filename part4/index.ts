//function return type
function add_two(n : number) : number
{
    
    return n + 2;

}

//with arrow function..
const getNumberIfFive = (n : number) : number => {

    if (n > 5) {
        return n + 5;
    }

    return 0;

}

const heros = ["tanjiro", "wingmoon", "spider-man"];

const displayHeros : string[] = heros.map((hero) : string => {

    return `The hero is: ${hero}`;

});

function fail(msg: string): never {
    throw new Error(msg);
}

//type of return: object is write as " : {}"...
function objectCallback() : {} {
    
    return {
        foo: "val",
        algo: "val"
    }

}

  