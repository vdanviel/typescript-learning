//reopening of interface is allowed..
interface User {
    googleId? : number
}

//herance of interfaces..
interface Admin extends User {

    role: "admin" | "coach" | "teacher"

}

const professor : Admin = {
    id: 443,
    role: "teacher",
    email: "teacher@teacher.com",
    googleId: 344,
    startTrail() {
        return false;
    },
    hasCoupoun(){
        return true
    }
}