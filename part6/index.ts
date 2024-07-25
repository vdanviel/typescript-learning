type mongoUser = {
    readonly _id: string, //readonly - somente leitura
    name: string,
    email: string,
    status: boolean,
    financial_info?: {}//esse "?" antes de ":" faz o campo ser OPCIONAL
}

let sys_user : mongoUser = {
    _id: "dsfdsf",
    name: "Victor",
    email: "email@email.com",
    status: false
    // financial_info: {
    //
    // }
}

//mixing types
type PerifericMouse = {
    rgb : boolean
}

type PerifericKeyBoard = {
    mecanic?: boolean
}

//we can mix types with "&"
type Periferic = PerifericKeyBoard & PerifericMouse;

const myPeriferic : Periferic = {
    rgb: true,
    mecanic: false
}