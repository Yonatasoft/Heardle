import fs from 'fs';
var songs = fs.read('./songs.js');


let song = {};
let today = new Date();
let day = today.getDate();
do{
  let x = Math.floor(Math.random()*5);
  song = songs[x];
  // if(song.lastUsed===''){
  //   song.lastUsed = today;
  // }
  console.log(songs[x]);
}while(song.lastUsed!="");

