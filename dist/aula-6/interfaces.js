"use strict";
const tlou = {
    title: "The Last of Us",
    description: "The best game",
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
};
// as mesmas coisas que tem pra classes tem para interfaces
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);
const leftBehind = {
    title: "The Last of Us",
    description: "The best game",
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters']
};
