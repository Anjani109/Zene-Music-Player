console.log("Welcome to the world of Music....Enjoy!!");

// Initialize the  Variables
let songIndex=0;
let audioElement=new Audio('Songs/1.mp3');
let masterPlay= document.getElementById('masterPlay'); 
// let songItemPlay= document.getElementById('songItemPlay'); 
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Break My Heart -Dua Lipa",filePath:"Songs/1.mp3",coverPath:"Covers/1.png"},
    {songName:"Anyone - Justin Beiber",filePath:"Songs/2.mp3",coverPath:"Covers/2.png"},
    {songName:"Butterfly - Jass Manak",filePath:"Songs/3.mp3",coverPath:"Covers/3.png"},
    {songName:"Lean On - Major",filePath:"Songs/4.mp3",coverPath:"Covers/4.png"},
    {songName:"Let Me Love You - Jb",filePath:"Songs/5.mp3",coverPath:"Covers/5.jpg"},
    {songName:"Love Me Like You do - Ellie Goulding",filePath:"Songs/6.mp3",coverPath:"Covers/6.png"},
    {songName:"On My Way - Alan Walker",filePath:"Songs/7.mp3",coverPath:"Covers/7.png"},
    {songName:"Senorita - Camilla, Shawn",filePath:"Songs/8.mp3",coverPath:"Covers/8.png"},
    {songName:"Stay - Kid Laroi, Jb",filePath:"Songs/9.mp3",coverPath:"Covers/9.png"},
    {songName:"Sugar And Brownies - Samantha",filePath:"Songs/10.mp3",coverPath:"Covers/10.png"},
    {songName:"Tu Aake Dekhle - King",filePath:"Songs/11.mp3",coverPath:"Covers/11.png"}
]
songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value* audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ( )=>{
    if(songIndex>=11){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

// songItemPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         songItemPlay.classList.remove('fa-circle-play');
//         songItemPlay.classList.add('fa-circle-pause');
        
//     }
//     else{
//         audioElement.pause();
//         songItemPlay.classList.remove('fa-circle-pause');
//         songItemPlay.classList.add('fa-circle-play');
        
//     }
// })