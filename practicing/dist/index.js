"use strict";
//tsc -w - copila o typescript de modo continuo (usado em conjunto com o tsconfig.json)
//tsc filename.ts - copila o arquivo estaticamente
console.log(true);
//CLASSES
class UserClassDefault {
    constructor(name, email, birth) {
        //os atributos podem ser declarados fora do constructor..
        this.name = null; //public - todos podem acessar o atributo.
        this.address = null; //private - pode ser acessado dentro dapropia classe mas n pode ser acessado fora.
        this.email = null;
        this.birth = null;
        //e sendo inicializados dentro do constrictor..
        this.name = name;
        this.email = email;
        this.birth = birth;
        this.address = "Brazil";
    }
}
//existe uma maneira mais pratica de montar classe..
class UserClassFast {
    //é possivel declarar e definir os atributos dentro do parametro do consctructor com - "encapsulation var_name : type = value"
    constructor(name = null, email = null, birth = null, address = "Brazil") {
        this.name = name;
        this.email = email;
        this.birth = birth;
        this.address = address;
        this.id = null; //mesmo nesse caso é possível ainda declarar os atributos fora do constructor..
        this.id = Math.floor(Math.random() * 1000); //é possivel fazer alguma coisa quando a classe é chamada tambem.. (definindo um numero aleatorio para o id do user)
    }
}
const me = new UserClassDefault("victor", "victor@victor.com", "2021-09-22");
console.log(me);
const you = new UserClassFast("victor", "victor@victor.com", "2021-09-22");
console.log(you);
//console.log(me.address); //wrong! this is a private attributte
//GET AND SETTERS
class Device {
    constructor(_id = Math.floor(Math.random() * 100), device = navigator === null || navigator === void 0 ? void 0 : navigator.userAgent, screen_w = window.innerWidth //protected - pode ser acessado somente pela propia classe, e pelas classes que herdam dessa classe (NÃO PODE SER ACESSADO POR FORA)..
    ) {
        this._id = _id;
        this.device = device;
        this.screen_w = screen_w;
        console.log("Device is running..");
    }
    get getDeviceType() {
        return this.device;
    }
    set setDeviceType(v) {
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
    constructor() {
        super(...arguments);
        this.loc = "Brazil";
    }
    get getLocation() {
        return this.getDeviceType + " - (" + this.loc + ")";
    }
    get getMobileScreenSize() {
        return this.screen_w / 2;
    }
}
const android = new AndroidDevice();
console.log(android.getLocation);
console.log(android.getDeviceType);
console.log("SCRREN SIZE IS:" + android.getMobileScreenSize);
//IMPLEMENTS..
class TakePicture {
    //definindo e inicializando..
    constructor(cameraMode, filter, zoom) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.zoom = zoom;
    }
}
class AppPhoto {
    //definindo e inicializando..
    constructor(cameraMode, filter, zoom, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.zoom = zoom;
        this.shorts = shorts;
    }
    createStory() {
        console.log("story created!");
    }
}
const instagram = new AppPhoto("default", "default", 212, "blob://date:video,mp4");
console.log(instagram);
instagram.createStory();
//ABSTRACT.. (NÃO PODE SER DECLARADA SOMENTE EXTENDIDA POR OUTRAS CLASSES...)
class Animal {
    // Método concreto OPCIONAL
    breathe() {
        console.log("Breathing...");
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        //todas as propiedades e metodos abstratos são obrigatorios a serem herdados aqui.. o resto não é..
        this.species = "Dog";
    }
    makeSound() {
        console.log("aauau!");
    }
    fetch() {
        console.log("Fetching...");
    }
}
const dog = new Dog();
console.log(dog.species);
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
function identity(arg) {
    return arg;
}
console.log(identity("hard-coded-string"));
//"Type" n precisa necessariamente ter esse nome pode ser qualquer coisa..
function identityTwo(arg) {
    return arg;
}
console.log(identityTwo(123));
//generics com array:
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity(['1', 8, false, 11.23]));
//"Type" aqui é um objeto.. e Key são os atributos desse objeto..
//"getProperty" esta sendo usado para como um definidor de um tipo de dado iteravel..
function getProperty(obj, key) {
    return obj[key];
}
//um dado iteral de array..
let x = [1, 2, 3, 4, 5];
//aq com o getProperty nos podemos acessar o valor pelo dado iteravel ("x") e pelo index/atr desse dado iteravel ("0")
getProperty(x, 0);
//GENERICS CLASS
class Shopping {
    constructor() {
        this.card = [];
    }
    addToCard(product) {
        this.card.push(product);
    }
    getCard() {
        return this.card;
    }
}
const myshop = new Shopping();
myshop.addToCard("minha vo");
myshop.addToCard(123);
myshop.addToCard([false, true]);
console.log(myshop.getCard());
//TYPE NARROWING.. é o direcionamento para oq vai acontecer para cada tipo de dado numa função
//exemplo..
function padLeft(padding, input) {
    if (typeof padding === "number") { //aq estamos dando as intruções caso seja numero..
        //caso for numero ele vai repetir "number " a quantidade de vezes de "padding" e dps unir com o "input"..
        return "number ".repeat(padding) + input;
    }
    //caso ambos forem strings a resposta final sera só uma união entre as strings..
    return padding + input;
}
console.log(padLeft(5, "DONE."));
function isAdmin(admin) {
    if ("token" in admin) { //"in" - if theres "token" on this param interface/type so its a Admin type, for "token" only exists on it..
        if (admin.activate == true) {
            return admin.token;
        }
    }
    return false;
}
const myself = {
    token: "A4X9#",
    activate: true
};
console.log(isAdmin(myself));
function move(animal) {
    if ("swim" in animal) { //"in" - if theres a "swim" on this param type/interface (animal), its a type "Fish" for the method "swim()" is inside of it.
        return animal.swim();
    }
    return animal.fly();
}
const beta = {
    swim() {
        return "It's a fish. It is swining!";
    }
};
console.log(move(beta));
//NARROWING PREDICATES.. pre verifica se parametro é daquele "type"/"interface"
function isFish(pet) {
    return pet.swim !== undefined;
}
const pet = {
    fly() {
        return "Look the bird flying!";
    }
};
function feedPet(pet) {
    if (isFish(pet)) {
        return "fish food.";
    }
    else {
        return "bird food.";
    }
}
console.log(feedPet(pet));
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
            break;
        case "square":
            return shape.size * shape.size;
            break;
        default:
            //caso não haja novos tipos de atributos nós fazemos "fallback"
            //que evita erros e continua o código, atribuindo o never a uma variavel e retornando..
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
            break;
    }
}
const ball = {
    kind: "circle",
    radius: 233
};
console.log(getArea(ball));
