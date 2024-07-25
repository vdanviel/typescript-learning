//TYPE:

//é possivel criar um tipo de dado com o type
type User = {
    name: string,
    email: string,
    status: boolean
}

function get_user(user : User) : User | boolean //": User | boolean" - return "type1 or type2"
{  
    
    if (!user.name || !user.email || user.status) {
        return false;
    }

    return user;
}

//type pode ser mais de um tipo com "|"..
type ID = number | string;

