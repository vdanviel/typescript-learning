//union types

//you can how you know, use lots of types on one variable with "|"..
let score : number | string | Array<number | string> = 0;

function start( arg: string | string[] | (() => string) | { s: string } ): string 
{
    // this is super common in JavaScript
    if (typeof arg === "string") {

      return commonCase(arg);

    } else if (Array.isArray(arg)) {//se for array..
    
      //ele so vai mapear sobre esse array e retornar uma stirng com cada elemento do aaray seperado por "," (por conta do "join()")  
      return arg.map(commonCase).join(",");

    } else if (typeof arg === "function") {

      return commonCase(arg());

    } else {

      return commonCase(arg.s);

    }
   
    function commonCase(s: string): string {
      // finally, just convert a string to another string
      return s;
    }
    
}