const songsData = [
    {
        id:1,
        name: "Shape Of you- Ed Sheeran",
        genre: "Pop",
        duration: 253,
        imgUrl: "https://i.ytimg.com/vi/JGwWNGJdvx8/sddefault.jpg",
    },
    {
        id:2,
        name: "All Of Me- Adele",
        genre: "Pop",
        duration: 250,
        imgUrl: "https://i.ytimg.com/vi/ngq5Aw0Q6rQ/maxresdefault.jpg",
    },
    {
        id:3,
        name: "Somelike Like You- Adele",
        genre: "Pop",
        duration: 300,
        imgUrl: "https://i.ytimg.com/vi/z7GCiVTlv04/maxresdefault.jpg",
    },
    {
        id:4,
        name: "Wonderwall- Oasis",
        genre: "Rock",
        duration: 250,
        imgUrl: "https://i.ytimg.com/vi/sYffFEIAzdE/maxresdefault.jpg",
    },
    {
        id:5,
        name: "Sugar- Maroon",
        genre: "Hip-Hop",
        duration: 200,
        imgUrl: "https://i.ytimg.com/vi/N1BcpzPGlYQ/hqdefault.jpg",
    },
    {
        id:6,
        name: "Locked Away- R. City",
        genre: "Hip-Hop",
        duration: 300,
        imgUrl: "https://i.ytimg.com/vi/VlvkNmSbwOc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBz7RfXSPVNNBOEJbynu9VC4b5LGg",
    },
];
let secondsCount = new Map();

for (const song of songsData) {
    const id = song.id;
    secondsCount.set(id, 0);
}
console.log(secondsCount);

function toggleSwitch(toggle) {
    const parentDiv = document.querySelector('.music-container');
    const parentUL = document.querySelector("ul");
    const allBtns = document.querySelectorAll("button");

    const childDivs = parentDiv.children;
    const childLists = parentUL.children;

    if (!parentDiv) return; 

    if (document.body.classList.contains("dark-mode")) {
        // If dark mode is ON, switch to light mode
        localStorage.setItem("theme", "light");
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        document.querySelector(".toggle-mode").classList.remove("active");

        // Apply light mode styles
        Array.from(childDivs).forEach(child => {
            child.style.backgroundColor = "rgb(127, 195, 255)";
        });
        document.querySelector('.music-card').style.backgroundColor="rgb(65, 65, 182)";
        document.querySelector('.music-duration-display').style.color="black";
        Array.from(childDivs).forEach(child => {
            child.style.backgroundColor = "rgb(127, 195, 255)";
        });
        Array.from(childLists).forEach(child=>{
            child.style.backgroundColor="rgb(65, 65, 182)";
        });
        Array.from(allBtns).forEach(child=>{
            child.style.backgroundColor="rgb(65, 65, 182)";
        });


    } else {
        // If light mode is ON, switch to dark mode
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        toggle.classList.add("active");
        localStorage.setItem("theme", "dark");

        // Apply dark mode styles
        // document.body.classList.remove("dark-mode");
        // document.body.classList.add("light-mode");
        // toggle.classList.remove("active");
        // localStorage.setItem("theme", "light");

        // Apply light mode styles
        document.querySelector('.music-card').style.backgroundColor="rgb(70, 70, 70)";
        document.querySelector('.music-duration-display').style.color="rgb(70, 70, 70)";
        Array.from(childDivs).forEach(child => {
            child.style.backgroundColor = "gray";
        });
        Array.from(childLists).forEach(child=>{
            child.style.backgroundColor="rgb(70, 70, 70)";
        });
        Array.from(allBtns).forEach(child=>{
            child.style.backgroundColor="rgb(70, 70, 70)";
        });
    }
}

// Apply correct theme on page load
window.onload = function () {
    const parentDiv = document.querySelector('.music-container');
    const parentUL = document.querySelector("ul");
    const allBtns = document.querySelectorAll("button");

    const childDivs = parentDiv.children;
    const childLists = parentUL.children;

    if (!parentDiv) return;

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        document.querySelector(".toggle-mode").classList.add("active");

        // Apply dark mode styles
        document.querySelector('.music-card').style.backgroundColor="rgb(70, 70, 70)";
        document.querySelector('.music-duration-display').style.color="rgb(70, 70, 70)";
        Array.from(childDivs).forEach(child => {
            child.style.backgroundColor = "gray";
        });
        Array.from(childLists).forEach(child=>{
            child.style.backgroundColor="rgb(70, 70, 70)";
        });
        Array.from(allBtns).forEach(child=>{
            child.style.backgroundColor="rgb(70, 70, 70)";
        });
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        document.querySelector(".toggle-mode").classList.remove("active");

        // Apply light mode styles
        Array.from(childDivs).forEach(child => {
            child.style.backgroundColor = "rgb(127, 195, 255)";
        });
        document.querySelector('.music-card').style.backgroundColor="rgb(65, 65, 182)";
        document.querySelector('.music-duration-display').style.color="black";
        Array.from(childDivs).forEach(child => {
            child.style.backgroundColor = "rgb(127, 195, 255)";
        });
        Array.from(childLists).forEach(child=>{
            child.style.backgroundColor="rgb(65, 65, 182)";
        });
        Array.from(allBtns).forEach(child=>{
            child.style.backgroundColor="rgb(65, 65, 182)";
        });
    }
};


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

const displaySongList = (newSongsData) => {
    songsList.innerHTML = "";
    newSongsData.forEach((song, index) => {
        const newSong = document.createElement('li');
        newSong.innerText = song.name;
        newSong.dataset.index = index;
        newSong.addEventListener("click", function () {
            console.log("song clicked");
            playSong(newSongsData, index);
        });
        songsList.appendChild(newSong);
    });
};

const songRoot = document.querySelector('.music-center-div');
const playSong = (newSongsData, index) => {
    songRoot.innerHTML = "";
    console.log(newSongsData);
    const dataset = newSongsData[index]; // Get the song data
    console.log("Dataset",dataset);
    console.log(dataset.id);
    const imgUrl = dataset.imgUrl;
    let songDetail = dataset.name.split('-');
    const songName = songDetail[0];
    const singer = songDetail[1] || "Unknown Artist";
    let durations = dataset.duration;
    const id = dataset.id;
    let minutes = Math.floor(durations / 60);
    let seconds = (durations % 60).toString().padStart(2, '0');
    // let totalSecs = ((dataset.duration)/60).toFixed(0);

    songRoot.innerHTML = `
    <div class="music-card">
        <img src="${imgUrl}" alt="${songName}">
        <h2>${songName}</h2>
        <p>${singer}</p>
    </div>
    <div class="music-duration-display">
        <i class="ri-play-fill" id="play-and-pause-btn" onclick="playNpauseFunc(${id}, this)"></i>

        <div class="music-duration-cover">
            <span id="covered-minutes">0 </span>:<span id="covered-seconds">00</span> / ${minutes}:${seconds}
        </div>
        <div class="distance-covered">
        <div class="distance-knob"></div></div>
        <i class="ri-volume-up-fill" ></i>
        <i class="ri-more-2-fill"></i>
    </div>
    <div class="change-songs">
        <button class="previous-song"><i class="ri-arrow-left-circle-fill"></i></button>
        <button class="addToPlaylist-btn">Add to Playlist</button>
        <button class="next-song"><i class="ri-arrow-right-circle-fill"></i></button>
    </div>
    `;

    const nextButton = document.querySelector('.next-song');
    const prevButton = document.querySelector('.previous-song');
    const addToPlaylist = document.querySelector('.addToPlaylist-btn');
    const currPlaylist = document.querySelector('.current-playlists');


    addToPlaylist.addEventListener("click", () => {
        const currPlaylistHeader = document.querySelector('#current-playlist-header');
        const addSongToPlaylist = document.createElement('li');
        addSongToPlaylist.classList.add('current-playlist'); // Fixed class addition
        addSongToPlaylist.textContent = songName;
        const playlistName = currPlaylistHeader.innerText.trim(); // Get the active playlist name

        if (playlistName in allPlaylistsObj) {
            if (!allPlaylistsObj[playlistName].includes(songName)) {  
                currPlaylist.appendChild(addSongToPlaylist);
                allPlaylistsObj[playlistName].push(songName); // Add song only if not already present
                console.log(`Added "${songName}" to ${playlistName}`);
            } else {
            console.log(`"${songName}" is already in ${playlistName}`);
        }
        } else {
            console.log("Playlist does not exist.");
        }


        console.log(allPlaylistsObj);

    });

    nextButton.addEventListener('click', () => {
        if (index < newSongsData.length - 1) {
            playSong(newSongsData, index + 1);
        } else {
            playSong(newSongsData, 0);
        }
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            playSong(newSongsData, index - 1);
        } else {
            playSong(newSongsData, newSongsData.length - 1);
        }
    });
};

let intervalMap = new Map(); // Store active intervals for each song

function playNpauseFunc(id, element) {
    console.log("Clicked song ID:", id);
    let playNpauseBtn = element;
    let knob = document.querySelector(`.distance-knob`);
    let currSeconds = document.querySelector('#covered-seconds');
    let currMinute = document.querySelector('#covered-minutes');

    // Retrieve stored data or initialize an empty Map
    let storedData = localStorage.getItem("secondsCount");
    let secondsCount = storedData ? new Map(Object.entries(JSON.parse(storedData))) : new Map();
    id = String(id);

    if (playNpauseBtn.classList.contains("ri-play-fill")) {
        console.log("Playing");
        playNpauseBtn.classList.replace("ri-play-fill", "ri-pause-fill");

        // Start a new interval only if one isn't already running
        if (!intervalMap.has(id)) {
            let interval = setInterval(() => {
                let currentCount = secondsCount.get(id) || 0;
                const song = songsData.find(song => song.id === parseInt(id)); // Find song by ID
                if (!song) return; // If song not found, exit functioncons
                const duration = song.duration;
                if (currentCount > song.duration) {
                    console.log("Song completed, stopping progress.");
                    clearInterval(intervalMap.get(id)); // Stop interval
                    intervalMap.delete(id);
                    return;
                }

                secondsCount.set(id, currentCount + 1);
                currSeconds.textContent = currentCount%60;
                currMinute.textContent = Math.floor(currentCount/60);

                // Save updated data to localStorage
                localStorage.setItem("secondsCount", JSON.stringify(Object.fromEntries(secondsCount)));

                // console.log(`Song ${id} played for: ${secondsCount.get(id)} seconds`);
                    updateKnobPosition(knob, secondsCount.get(id), duration);
            }, 1000);

            intervalMap.set(id, interval);
        }
    } else {
        console.log("Paused");

        playNpauseBtn.classList.replace("ri-pause-fill", "ri-play-fill");

        // Clear interval when paused
        if (intervalMap.has(id)) {
            clearInterval(intervalMap.get(id));
            intervalMap.delete(id);
        }
    }

    console.log("Updated class:", playNpauseBtn.className);
}

function updateKnobPosition(knob, count, duration) {
    if (!knob) return;

    let maxDistance = 10;  // Max movement (10rem)
    let progress = Math.min((count / duration) * maxDistance, maxDistance);

    console.log(`Knob Progress: ${progress}rem`);
    
    knob.style.transform = `translateX(${progress}rem)`;
}




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

const newPlaylistInput = document.querySelector('.input-new-playlist');
const createPlaylistBtn = document.querySelector('#create-playlist-btn');
const allPlaylists = document.querySelector('.all-playlists');
const currPlaylistHeader = document.querySelector('#current-playlist-header');
let currPlaylistData = []; // Ensure this is defined
const allPlaylistsObj = {};
const currPlaylist = document.querySelector('.current-playlists');

createPlaylistBtn.addEventListener("click", () => {
    console.log('Playlist created');

if (newPlaylistInput.value.trim() !== "") { 
    const newPlaylist = document.createElement('li');
    newPlaylist.classList.add('newPlaylist');
    newPlaylist.textContent = newPlaylistInput.value;

    // Create a new array for the playlist
    const newArrKey = newPlaylistInput.value.trim(); 
    allPlaylistsObj[newArrKey] = []; // Initialize an empty array for this playlist
    console.log(newArrKey);
    console.log(allPlaylistsObj);
    allPlaylists.appendChild(newPlaylist);

    newPlaylist.addEventListener("click", () => {
        let updatedHeaderSong = newPlaylist.innerText;
        currPlaylist.innerHTML="";
        currPlaylistHeader.innerText = updatedHeaderSong;

        // Reference the correct playlist array
        currPlaylistData = allPlaylistsObj[newArrKey]; 
        console.log(currPlaylistData);
    });

    newPlaylistInput.value = ""; // Clear input after adding
}

});



displaySongList(songsData);


