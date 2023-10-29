import { videos } from "./data.js"

const modal = document.getElementById('myModal')
const myModalAtive = new bootstrap.Modal(modal)
const containerModal = document.getElementById("container-modal")

function openVideo(){
    myModalAtive.show()
    document.body.style.overflowY = "hidden"
    containerModal.innerHTML = ""
}

function showModalGrowcast(){
    const arrayGrowcast = videos[0].growcast
    const playVideo = document.querySelectorAll("#playGrowcast")
    const arrayPlayVideos = [...playVideo]

    // BUTTON SELECT
    playVideo.forEach((card) => {
        card.addEventListener('click', (e) => {
            openVideo()
            const cardClick = e.target;
            const index = arrayPlayVideos.findIndex(card => card === cardClick)

            const videoModal = document.createElement("div");
            videoModal.classList.add("video_modal")

            videoModal.innerHTML = `
            <iframe width="95%" height="800" src="${arrayGrowcast[index].link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `;

            containerModal.appendChild(videoModal);
        });
    });
}

function showModalWebinar(){
    const arrayWebinar = videos[1].webinarFlutter
    const playVideo = document.querySelectorAll("#playWebinar")
    const arrayPlayVideos = [...playVideo]

    // BUTTON SELECT
    playVideo.forEach((card) => {
        card.addEventListener('click', (e) => {
            openVideo()
            const cardClick = e.target;
            const index = arrayPlayVideos.findIndex(card => card === cardClick)

            const videoModal = document.createElement("div");
            videoModal.classList.add("video_modal")

            videoModal.innerHTML = `
            <iframe width="95%" height="800" src="${arrayWebinar[index].link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `;

            containerModal.appendChild(videoModal);
        });
    });
}

function showModalUXUI(){
    const arrayUXUI = videos[2].jornadaUXUI
    const playVideo = document.querySelectorAll("#playUXUI")
    const arrayPlayVideos = [...playVideo]

    // BUTTON SELECT
    playVideo.forEach((card) => {
        card.addEventListener('click', (e) => {
            openVideo()
            const cardClick = e.target;
            const index = arrayPlayVideos.findIndex(card => card === cardClick)

            const videoModal = document.createElement("div");
            videoModal.classList.add("video_modal")

            videoModal.innerHTML = `
            <iframe width="95%" height="800" src="${arrayUXUI[index].link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `;

            containerModal.appendChild(videoModal);
        });
    });
}

function showModalDiversos(){
    const arrayDiversos = videos[3].diversos
    const playVideo = document.querySelectorAll("#playDiversos")
    const arrayPlayVideos = [...playVideo]

    // BUTTON SELECT
    playVideo.forEach((card) => {
        card.addEventListener('click', (e) => {
            openVideo()
            const cardClick = e.target;
            const index = arrayPlayVideos.findIndex(card => card === cardClick)

            const videoModal = document.createElement("div");
            videoModal.classList.add("video_modal")

            videoModal.innerHTML = `
            <iframe width="95%" height="800" src="${arrayDiversos[index].link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `;

            containerModal.appendChild(videoModal);
        });
    });
}

export { showModalGrowcast, showModalWebinar, showModalUXUI, showModalDiversos }