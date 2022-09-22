//accountInfo
//charInfo
//playerInfo

type AccountInfo = {
    id: number
    name: string
    email?: string //O "?" informa que opcional
}

const account: AccountInfo = {
    id: 123,
    name: "Higor"
    //email é opcional
}

type CharInfo = {
    nickname: string
    level: number
}

const char: CharInfo = {
    nickname: 'HCF4',
    level: 50
}

type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: "Higor",
    nickname: 'HCF4',
    level: 50
}

console.log(player)