let landipage = document.querySelector(".landing-page");
let imagArray=["09.jpeg","010.jpeg","011.jpeg","012.jpeg","013.jpeg","21.jpeg","20.jpeg"]
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imagArray.length);
    landipage.style.backgroundImage = 'URL("imags/' + imagArray[randomNumber] +'")';
}, 10000);

