//interface
interface User {
    readonly id: number,
    status?: boolean,
    email: string,
    startTrail() : boolean,
    hasCoupoun(code : number) : boolean
}

class UserImpl implements User {

    readonly id: number;
    status?: boolean;
    email: string;
    startTrail(): boolean {
        return false;
    }

    constructor(id : number, email: string, status?: boolean) {
        
        this.id = id;
        this.status = status;
        this.email = email;

    }

    startTrial() : boolean
    {
        return true
    }

    hasCoupoun(code: number) : boolean
    {

        if (code == this.id) {
            return true
        }

        return false;
    }

}

const user = new UserImpl(2121, "email@email.com", true);

console.log(user);

console.log(user.hasCoupoun(user.id));

//continues on "index1.ts"