var shortId = require('..');

shortId.config({
    disableDefaultAlphabetLength: true,
    disableDefaultIdLength: true,
    idLength: 6
})
shortId.characters('123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')

//Generate 10 ids

var i = 25000;
while (i--) {
    console.log(shortId.generate());
}
