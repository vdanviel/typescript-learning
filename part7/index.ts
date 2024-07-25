const superHero: Array<string> = [];

//é possivel criar array de "type"..
type User = {
    name: string,
    email: string,
    status?: boolean
}

//um array de "User"..
const all_users : User[] = [];

all_users.push({
    name: "me",
    email: "me@me.com",
    //status: true //opcional
})

type Hobbie = {
    chess: boolean,
    games: boolean,
    movies: boolean
}

//arrays diferentes com diferentes tipos dentro de um array..
const ml_model : Hobbie[][] = [

    [
        {
            chess: true,
            games: false,
            movies: false
        },
        {
            chess: true,
            games: true,
            movies: false
        }
    ],

    [
        {
            chess: true,
            games: false,
            movies: true
        },
        {
            chess: false,
            games: false,
            movies: false
        }
    ]

]