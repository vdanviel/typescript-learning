//types: (https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

//o tsc usa uma linguagem muito tipavel, ou seja todas as variaveis aq terão um tipo
//essa é a maneira que declaramos:
let me : string = "Victor";

function random_string(len : number) {//nos paraametros da função devemos declarar que tipo é o paramtro taambém
    
    //para declararmos que tipo de dado que um array usa devemos adicionar ": type[]"
    let arr : string[] = ["w","P","V","5","K","O","A","1","G","7"];//esse array usa somente tipos de STRING

    const result : string[] = [];

    for (let index = 0; index < len; index++) {
        
        let ran_index : number = Math.floor(Math.random() * 10);

        result.push(arr[ran_index]);

    }

    return result.join('');

}

console.log(random_string(10));