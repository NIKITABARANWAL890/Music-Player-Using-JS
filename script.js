const songsData = [
    {
        name: "Shape Of you- Ed Sheeran",
        genre: "Pop",
        duration: 253,
        imgUrl: "https://i.ytimg.com/vi/JGwWNGJdvx8/sddefault.jpg",
    },
    {
        name: "All Of Me- Adele",
        genre: "Pop",
        duration: 250,
        imgUrl: "https://i.ytimg.com/vi/ngq5Aw0Q6rQ/maxresdefault.jpg",
    },
    {
        name: "Somelike Like You- Adele",
        genre: "Pop",
        duration: 300,
        imgUrl: "https://i.ytimg.com/vi/z7GCiVTlv04/maxresdefault.jpg",
    },
    {
        name: "Wonderwall- Oasis",
        genre: "Rock",
        duration: 250,
        imgUrl: "https://i.ytimg.com/vi/sYffFEIAzdE/maxresdefault.jpg",
    },
    {
        name: "Sugar- Maroon",
        genre: "Hip-Hop",
        duration: 200,
        imgUrl: "https://i.ytimg.com/vi/N1BcpzPGlYQ/hqdefault.jpg",
    },
    {
        name: "Locked Away- R. City",
        genre: "Hip-Hop",
        duration: 300,
        imgUrl: "https://i.ytimg.com/vi/VlvkNmSbwOc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBz7RfXSPVNNBOEJbynu9VC4b5LGg",
    },
];


const selectElement = document.getElementsByTagName("select")[0];
const showOptions = () => {
    selectElement.innerHTML = "";

    const songsObj = {};
    songsData.forEach((song) => (songsObj[song.genre] = true));
    const genres = Object.keys(songsObj);
    console.log(genres);
    const allOption = document.createElement("option");
    allOption.innerText = "All";
    selectElement.appendChild(allOption);
    genres.forEach((genre) => {
        const newOption = document.createElement("option");
        newOption.value = genre;
        newOption.innerText = genre;
        selectElement.appendChild(newOption);
    });
};

showOptions();


const songsList = document.querySelector('.all-songs');

const displaySongList = (newSongsData) =>{
    songsList.innerHTML="";
    newSongsData.forEach((song, index)=>{
        const newSong = document.createElement('li');
        newSong.innerText = song.name;
        newSong.dataset.index = index;
        newSong.addEventListener("click", function () {
            playSong(newSongsData[this.dataset.index], index);
        });
        songsList.appendChild(newSong);
    });
};

const songRoot = document.querySelector('.music-center-div');

const playSong = (dataset, index) => {
    console.log(index);
    songRoot.innerHTML = "";
    const imgUrl = dataset.imgUrl;
    let songDetail = dataset.name;
    songDetail = songDetail.split('-');
    const songName = songDetail[0];
    const singer = songDetail[1] || "Unknown Artist";
    let durations = dataset.duration;
    let minutes = Math.floor(durations / 60); 
    let seconds = (durations % 60).toString().padStart(2, '0');

    songRoot.innerHTML = `
    <div class="music-card">
        <img src="${imgUrl}" alt="${songName}">
        <h2>${songName}</h2>
        <p>${singer}</p>
    </div>
    <div class="music-duration-display">
        <i class="ri-play-fill"></i>
        <div class="music-duration-cover">
            0:00 / ${minutes}:${seconds}
        </div>
        <div class="distance-covered"></div>
        <i class="ri-volume-up-fill"></i>
        <i class="ri-more-2-fill"></i>
    </div>
    <div class="change-songs">
        <button class="previous-song"><i class="ri-arrow-left-circle-fill"></i></button>
        <button class="addToPlaylist">Add to Playlist</button>
        <button class="next-song"><i class="ri-arrow-right-circle-fill"></i></button>
    </div>
    `;

    const nextButton = document.querySelector('.next-song');
        nextButton.addEventListener('click', (index)=>{
        if(index===0){
            return;
        }else{
            index--;
        }
    });
    playSong(dataset, index);
};


let newSongsData = [];
const handleSelect = (e) =>{
    const selectedGenre = e.target.value;

    if(selectedGenre==="All"){
        newSongsData = [...songsData];
    }else{
        newSongsData = songsData.filter((song)=>{
            if(song.genre === selectedGenre) return true;
            return false;
        });
    }
    console.log(newSongsData);
    displaySongList(newSongsData);
};


displaySongList(songsData);


