var tlou = {
    title: "The Last of Us",
    description: "The best game",
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    getSimilars: function (title) {
        console.log("Similar games to ".concat(title, ": Uncharted, A Plague Tale, Metro"));
    }
};
// as mesmas coisas que tem pra classes tem para interfaces
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);
var leftBehind = {
    title: "The Last of Us",
    description: "The best game",
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters']
};
