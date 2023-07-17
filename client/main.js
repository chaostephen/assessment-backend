const songsContainer = document.querySelector('#songs-container')
const form = document.querySelector('form')

const baseURL='http://localhost:4000/api/songs'

const songsCallback = ({data:songs})=> displaySongs(songs)

const errCallback = err=>console.log(err.response.data)

const getAllSongs=()=>axios.get(baseURL).then(songsCallback).catch(errCallback)
const addSong=body=>axios.post(baseURL,body).then(songsCallback).catch(errCallback)
const deleteSong=id=>axios.delete(`${baseURL}/${id}`).then(songsCallback).catch(errCallback)
const updateSong=(id,type)=>axios.put(`${baseURL}/${id}`,{type}).then(songsCallback).catch(errCallback)

function submitHandler(e){
    e.preventDefault()
    
    let title = document.querySelector('#title')
    let artist = document.querySelector('#artist')
    let rating = document.querySelector('input[name="ratings"]:checked')

    let bodyObj={
        title:title.value,
        artist:artist.value,
        rating:rating.value
    }
    addSong(bodyObj)

    title.value=''
    rating.checked=false
    artist.value=''
}

function createSongCard(song) {
    const songCard = document.createElement('div')
    songCard.classList.add('song-card')

    songCard.innerHTML = `<p class="song-name">Title: ${song.title}</p><p class="artist-name">Artist: ${song.artist}</p>
    <div class="btns-container">
        <button onclick="updateSong(${song.id}, 'minus')">-</button>
        <p class="song-rating">${song.rating} stars</p>
        <button onclick="updateSong(${song.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteSong(${song.id})">delete</button>
    `
    songsContainer.appendChild(songCard)
}

function displaySongs(arr) {
    songsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createSongCard(arr[i])
    }
}

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn=document.getElementById("fortuneButton")
const monthBtn=document.getElementById("monthButton")
const songBtn=document.getElementById("songButton")






form.addEventListener('submit',submitHandler)
getAllSongs()


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getMonth=()=>{
    axios.get("http://localhost:4000/api/month/").then(res=>{
        const data=res.data;
        alert(data);
    })
}
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',getFortune)
monthBtn.addEventListener('click',getMonth)