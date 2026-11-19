let playlist = ["believer", "nirvana", "believer", "queen", "eminem", "nirvana", "adele"];
console.log(playlist);

playlist.sort();
console.log(playlist);

let nirvana = playlist.indexOf("nirvana");
console.log(nirvana);

let nirvana2 = playlist.lastIndexOf("nirvana");
console.log(nirvana2);

let believer = playlist.indexOf("believer");
console.log(believer);

let believer2 = playlist.lastIndexOf("believer");
console.log(believer2);

let check1 = playlist.includes("queen");
console.log(check1);
let check2 = playlist.includes("metallica");
console.log(check2);
let check3 = playlist.includes("adele");
console.log(check3);

playlist.reverse();
console.log(playlist);