import { videos } from "./data.js"

const modal = document.getElementById('myModal')
const myModalAtive = new bootstrap.Modal(modal)
const containerModal = document.getElementById("container-modal")

function openVideo(){
    myModalAtive.show()
    document.body.style.overflowY = "hidden"
    containerModal.innerHTML = ""
}

function showModal(){
    const arrayGrowcast = videos[0].growcast
    const playVideo = document.querySelectorAll("#playVideo")
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
            console.log(videoModal)

            containerModal.appendChild(videoModal);
        });
    });
}

export { modal, myModalAtive, containerModal, showModal, openVideo }