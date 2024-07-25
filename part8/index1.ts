type User = {
    name: string,
    email: string,
    status: boolean
}

type Admin = {
    name: string,
    email: string,
    paid: boolean
}

//mix types - "&" - allow unify the elements of "types" obligatorily
const me : User & Admin = {
    name: "",
    email: "",
    paid: true,
    status: true
}

//mix types - "|" - allow unify the elements of "types" with NO OBLIGATORINESS
const you : User | Admin = {
    name: "",
    email: "",
    paid: true,
    //status: true
}

function getType(param: number | string | boolean ) : string | boolean
{
    
    switch ( typeof param) {

        case "string":
            return "string"
            break;

        case "number":
            return "number"
            break;

        case "boolean":
            return "boolean"
            break;
    
        default:
            return false;
            break;

    }

}
