import src from "./../statics/music.mp3"
// es6
// import {
//     a
// } from "./module/module1";

//  require
// require("./module/module1")
require.ensure([],(require)=>{
    require("./module/module1")
},"dynamic")

export default function () {
    
    // console.log(a);
    const b = 1;
    console.log(b);
    // debugger;
    audio.src = src;
}