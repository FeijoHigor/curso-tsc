interface Game {
    title: string
    description: string
    genre: string
    platform: string[]
    getSimilars?: (title: string) => void
}

const tlou: Game = {
    title: "The Last of Us",
    description: "The best game",
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
    }
}

// as mesmas coisas que tem pra classes tem para interfaces

if(tlou.getSimilars) tlou.getSimilars(tlou.title)

interface DLC extends Game {
    originalGame: Game
    newContent: string[]
}

const leftBehind: DLC = {
    title: "The Last of Us",
    description: "The best game",
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters']
}