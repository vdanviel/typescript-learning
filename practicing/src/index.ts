//tsc -w - copila o typescript de modo continuo (usado em conjunto com o tsconfig.json)
//tsc filename.ts - copila o arquivo estaticamente

console.log(true);

//CLASSES
class UserClassDefault {

    //os atributos podem ser declarados fora do constructor..

    public name: string | null = null//public - todos podem acessar o atributo.
    private readonly address: string | null = null//private - pode ser acessado dentro dapropia classe mas n pode ser acessado fora.
    public email: string | null = null
    public birth: string | null = null
    
    constructor(name : string, email: string, birth : string) {

        //e sendo inicializados dentro do constrictor..
        this.name = name
        this.email = email
        this.birth = birth
        this.address = "Brazil"
    }

} 

//existe uma maneira mais pratica de montar classe..
class UserClassFast {
    
    private readonly id : number | null = null;//mesmo nesse caso é possível ainda declarar os atributos fora do constructor..

    //é possivel declarar e definir os atributos dentro do parametro do consctructor com - "encapsulation var_name : type = value"
    constructor(
        public name : string | null = null,
        public email: string | null = null,
        public birth : string | null = null,
        private address : string | null = "Brazil"
    ){
        this.id = Math.floor(Math.random() * 1000);//é possivel fazer alguma coisa quando a classe é chamada tambem.. (definindo um numero aleatorio para o id do user)
    }

}

const me = new UserClassDefault("victor", "victor@victor.com", "2021-09-22");

console.log(me);

const you = new UserClassFast("victor", "victor@victor.com", "2021-09-22");

console.log(you);

//console.log(me.address); //wrong! this is a private attributte

//GET AND SETTERS
class Device {

    constructor(
        private readonly _id : number = Math.floor(Math.random() * 100),
        private device : string = navigator?.userAgent,
        protected screen_w : number = window.innerWidth//protected - pode ser acessado somente pela propia classe, e pelas classes que herdam dessa classe (NÃO PODE SER ACESSADO POR FORA)..
    )
    {
        console.log("Device is running..");
    }

    
    public get getDeviceType() : string {
        return this.device;
    }
    
    
    public set setDeviceType(v : string) {//notice - "set" NEVER WILL BE TYPEBLE..

        if (v.length < 2) {
            throw new Error("Not possible to set device. Device name length is too small.");
        }

        this.device = v;
    }

}

const pc = new Device();

console.log(pc.getDeviceType);

pc.setDeviceType = "SUPER PC";

console.log(pc.getDeviceType);

//EXTENDS..
class AndroidDevice extends Device {

    private loc : string = "Brazil"
    
    public get getLocation() : number | string {
        return this.getDeviceType + " - (" + this.loc + ")"
    }

    public get getMobileScreenSize() : number {
        return this.screen_w / 2;
    }
        
}

const android = new AndroidDevice();

console.log(android.getLocation);
console.log(android.getDeviceType);
console.log("SCRREN SIZE IS:" + android.getMobileScreenSize);

interface Photo {
    cameraMode: string,
    filter: string,
    zoom: number
}

//IMPLEMENTS..
class TakePicture implements Photo {
    //definindo e inicializando..
    constructor(
        public cameraMode: string,
        public filter: string,
        public zoom: number
    )
    {}
}

interface Story {
    createStory(): void;
}

class AppPhoto implements Photo, Story{
    //definindo e inicializando..
    constructor(
        public cameraMode: string,
        public filter: string,
        public zoom: number,
        public shorts: string
    )
    {}

    createStory(): void {
        console.log("story created!");
        
    }
}

const instagram = new AppPhoto("default", "default", 212, "blob://date:video,mp4");

console.log(instagram);

instagram.createStory();

//ABSTRACT.. (NÃO PODE SER DECLARADA SOMENTE EXTENDIDA POR OUTRAS CLASSES...)

abstract class Animal {

    /*
        Os atributos "abstract" dentro de uma classe abstrata,
        assim como os métodos abstratos, são usados para definir uma estrutura que deve ser seguida pelas subclasses.
        Isso força as subclasses a implementar esses atributos,
        garantindo que qualquer classe derivada terá uma implementação específica desses atributos.
    */

    // Propriedade abstrata OBRIGATORIA
    abstract species: string;

    // Método concreto OPCIONAL
    breathe(): void {
        console.log("Breathing...");
    }

    // Método abstrato ORIGATORIA
    abstract makeSound(): void;

}
  
class Dog extends Animal {

    //todas as propiedades e metodos abstratos são obrigatorios a serem herdados aqui.. o resto não é..
    species: string = "Dog";

    makeSound(): void {
        console.log("aauau!");
        
    }

    fetch(): void {
        console.log("Fetching...");
    }

}

const dog = new Dog();
console.log(dog.species)

//GENERICS.. 
/*
    retorna em uma função qual é o tipo dos seus dados sem necessidade de declarar os tipos
    (por isso "generico" pq o tipo é generico)..
    os genericos sempre serão IDENTICOS aos dados passados, ou seja terão o mesmo tipo e valor..
*/

/*
    why do no use "|" (union) or type "any" ?
    because if we use it the code will run, but the information about the passed data will be lost!
*/

function identity<Type>(arg: Type): Type {//o valor retornado automaticamente se tornara o valor recebido com seu tipo de dado

    return arg;

}

console.log(identity("hard-coded-string"));

//"Type" n precisa necessariamente ter esse nome pode ser qualquer coisa..
function identityTwo<t>(arg: t): t {
    return arg;
}

console.log(identityTwo(123));

//generics com array:
function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
}

console.log(loggingIdentity(['1', 8, false, 11.23]));

//"Type" aqui é um objeto.. e Key são os atributos desse objeto..
//"getProperty" esta sendo usado para como um definidor de um tipo de dado iteravel..
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {

    return obj[key];

}

//um dado iteral de array..
let x = [1,2,3,4,5];

//aq com o getProperty nos podemos acessar o valor pelo dado iteravel ("x") e pelo index/atr desse dado iteravel ("0")
getProperty(x, 0);

//GENERICS CLASS

class Shopping<Type> {
    private card : Type[] = [];

    addToCard(product: Type){
        this.card.push(product)
    }

    
    public getCard() : Type[] {
        return this.card;
    }
    

}

const myshop = new Shopping();

myshop.addToCard("minha vo");
myshop.addToCard(123);
myshop.addToCard([false,true]);

console.log(myshop.getCard());

//TYPE NARROWING.. é o direcionamento para oq vai acontecer para cada tipo de dado numa função

//exemplo..
function padLeft(padding: number | string, input: string): string {//n sabemos se passing vai ser numero ou texto..

    if (typeof padding === "number") {//aq estamos dando as intruções caso seja numero..

        //caso for numero ele vai repetir "number " a quantidade de vezes de "padding" e dps unir com o "input"..
        return "number ".repeat(padding) +  input;
    }

    //caso ambos forem strings a resposta final sera só uma união entre as strings..
    return padding + input;
}

console.log(padLeft(5, "DONE."));

//"IN" no TYPE NARROWING.. verifica qual tipo de dado é para o callback de uma função..

interface Admin {
    token: string,//token EXISTS ON THIS interface
    activate: boolean
}

interface User {
    name: string,
    age: number
}

function isAdmin(admin : Admin | User) {
    
    if ("token" in admin) {//"in" - if theres "token" on this param interface/type so its a Admin type, for "token" only exists on it..

        if (admin.activate == true) {
            return admin.token;
        }

    }

    return false;
}

const myself : Admin = {
    token: "A4X9#",
    activate: true
}

console.log(isAdmin(myself));


type Fish = {
    swim: () => string//"swim()" exists on this type and it have to return a string!
}

type Bird = {
    fly: () => string
}
 
function move(animal: Fish | Bird) {

  if ("swim" in animal) {//"in" - if theres a "swim" on this param type/interface (animal), its a type "Fish" for the method "swim()" is inside of it.
    return animal.swim();
  }
 
  return animal.fly();
}

const beta : Fish = {
    swim() {
        return "It's a fish. It is swining!"
    }
}

console.log(move(beta));

//NARROWING PREDICATES.. pre verifica se parametro é daquele "type"/"interface"
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

const pet : Fish | Bird = {

    fly() {
        return "Look the bird flying!"
    }

}

function feedPet(pet : Fish | Bird) {
     
    if (isFish(pet)) {
        return "fish food.";
    }else{
        return "bird food.";
    }

}

console.log(feedPet(pet));

//DISCRIMINATED UNION.. verifica dentro de uma união de tipos de qual valor estamos falando se dois tipos carregarem o mesmo atributo..

interface Square {
    kind: "square",
    size: number
}

interface Circle {
    kind: "circle",
    radius: number
}

type Shape = Square | Circle; //é a UNIÃO das suas formas..

function getArea(shape : Shape) : number | never
{

    switch (shape.kind) {

        case "circle":

            return Math.PI * shape.radius ** 2

            break;

        case "square":

            return shape.size * shape.size

            break;
    
        default:

            //caso não haja novos tipos de atributos nós fazemos "fallback"
            //que evita erros e continua o código, atribuindo o never a uma variavel e retornando..

            const _exhaustiveCheck : never = shape;
            return _exhaustiveCheck;

            break;
    }

}

const ball : Shape = {
    kind: "circle",
    radius: 233
}

console.log(getArea(ball));