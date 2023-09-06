console.log("welcome to spotify")
// //  initialise
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay")
let myprogressBar = document.getElementById("progressBar")
let gif = document.getElementById("gifs");
let songitems = Array.from(document.getElementsByClassName("songitem"));

const lib = document.getElementById("Library");

let songs = [
    { songName: "preethi prema", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "bazigar bazigar", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "love me like u", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "drakes album", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "magic's  rude", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "snoop dogggg", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "gansta paradise", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  


]

songitems.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;

})

// play/pause handler
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle")
        masterPlay.classList.remove("fa-pause-circle")
        gif.style.opacity = 0;

    }
})




//  events 
audioElement.addEventListener("timeupdate", () => {
    // console.log("timeupdate");
    //  update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener("change", () => {
    audioElement.currentTime = myprogressBar.value * audioElement.duration / 100;
})

const makeallPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeallPlays()
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songindex}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")

    })
})


document.getElementById("next").addEventListener('click', () => {
    if (songindex >= 7) {
        songindex = 0
    }
    else {
        songindex += 1;
    }
    audioElement.src = `songs/${songindex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")

})

document.getElementById("previous").addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0
    }
    else {
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")

})
document.getElementById("Library").addEventListener("click", () => {
    alert(" library is emplty please add your favourite songs  ")
})




// //====================================================

// let audioElement = new Audio()
// let progressBar = document.getElementById("progressBar")
// let masterPlay = document.getElementById("masterPlay")
// let songItemImage = Array.from(document.getElementsByClassName("songItemImage"))
// let songName = Array.from(document.getElementsByClassName("songName"))
// let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"))
// let  masterSongText = document.getElementById("masterSongText")
// let timeStamp = Array.from(document.getElementsByClassName("timeStamp"))
// let songIndex = 0;



// let songsArray = [
//     { songgName: "Godzila (Eminem)", coverPath: "covers/1.jpg", filePath: "songs/1.mp3" },
// { songgName: "Channa Meraya(Arjit Singh)", coverPath: "covers/2.jpg", filePath: "songs/2.mp3" },
// { songgName: "Let me love you(Justin Bieber)", coverPath: "covers/3.jpg", filePath: "songs/3.mp3" },
// { songgName: "Kesariya", coverPath: "covers/4.jpg", filePath: "songs/4.mp3" },
// { songgName: "Mann Meri Jaan", coverPath: "covers/5.jpg", filePath: "songs/5.mp3" },
// { songgName: "Eenie Meenie (Justin Bieber)", coverPath: "covers/6.jpg", filePath: "songs/6.mp3" },
// { songgName: "Raatan Lambiyan (Jubin Nautiyal)", coverPath: "covers/7.jpg", filePath: "songs/7.mp3" },
// { songgName: "Heeriye Heeriye ", coverPath: "covers/8.jpg", filePath: "songs/8.mp3" },
// { songgName: "The Breakup song", coverPath: "covers/9.jpg", filePath: "songs/9.mp3" },
// { songgName: "Calm Down", coverPath: "covers/10.jpg", filePath: "songs/10.mp3" }
// ]


// for (let index in songItemImage) {
//     songItemImage[index].src = songsArray[index].coverPath
//     songName[index].innerText = songsArray[index].songgName

// }




// masterPlay.addEventListener("click", () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         masterPlay.classList.remove("fa-circle-play")
//         masterPlay.classList.add("fa-circle-pause")
//         audioElement.play();
//         gif.style.opacity = 1
//     }
//     else {
//         masterPlay.classList.remove("fa-circle-pause")
//         masterPlay.classList.add("fa-circle-play")
//         audioElement.pause();
//         gif.style.opacity = 0
//     }

// })

// audioElement.addEventListener("timeupdate", () => {

//     // setting value of progress bar audioElement.currentTime gives current time of audio and audioElement.duration gives total duration of audio
//     let progressInPercentage = parseInt((audioElement.currentTime / audioElement.duration) * 100)
//     progressBar.value = progressInPercentage
// })

// // seeking audio with progress bar
// progressBar.addEventListener("change", () => {
//     audioElement.currentTime = (progressBar.value * audioElement.duration) / 100
// })
// const makeAllPlays = () => {
//     songItemPlay.forEach((element) => {
//         element.classList.remove("fa-circle-pause")
//         element.classList.add("fa-circle-play")
//     })
// }

// songItemPlay.forEach((element) => {
//     element.addEventListener("click", (e) => {

//         makeAllPlays();
//         songIndex = parseInt(e.target.id)
//         masterSongText.innerText = songsArray[songIndex].songgName
//         e.target.classList.remove("fa-circle-play")
//         e.target.classList.add("fa-circle-pause")
//         audioElement.src = `songs/${songIndex + 1}.mp3`
//         audioElement.currentTime = 0;
//         audioElement.play()
//         masterPlay.classList.remove("fa-circle-play")
//         masterPlay.classList.add("fa-circle-pause")

//     })
// })

// document.getElementById("previous").addEventListener("click", () => {
//     if (songIndex <= 0) {
//         songIndex = 9
//     }
//     else {
//         songIndex -= 1
//     }
//     masterSongText.innerText = songsArray[songIndex].songgName
//     audioElement.src = `songs/${songIndex + 1}.mp3`
//     audioElement.currentTime = 0;
//     audioElement.play()
//     masterPlay.classList.remove("fa-circle-play")
//     masterPlay.classList.add("fa-circle-pause")

// })

// document.getElementById("next").addEventListener("click", () => {
//     if (songIndex >= 9) {
//         songIndex = 0
//     }
//     else {
//         songIndex += 1
//     }
//     masterSongText.innerText = songsArray[songIndex].songgName
//     audioElement.src = `songs/${songIndex + 1}.mp3`
//     audioElement.currentTime = 0;
//     audioElement.play()
//     masterPlay.classList.remove("fa-circle-play")
//     masterPlay.classList.add("fa-circle-pause")

// })
