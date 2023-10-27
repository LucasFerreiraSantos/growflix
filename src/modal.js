import { videos } from "./data.js"

const modal = document.getElementById('myModal')
const myModalAtive = new bootstrap.Modal(modal)
const containerModal = document.getElementById("container-modal")

function openVideo(){
    myModalAtive.show()
    containerModal.innerHTML = ""
}

function showModal(){
    const cardSelect = videos[0].growcast
    const playVideo = document.querySelectorAll('.playVideo')
    const arrayPlayVideos = [...playVideo]

    // BUTTON SELECT
    playVideo.forEach((card) => {
        card.addEventListener('click', (e) => {

            const cardClicado = e.target;
            const index = arrayPlayVideos.findIndex(card => card === cardClicado)
            console.log(index)
            const videoModal = document.createElement("div");
            videoModal.classList.add("video_modal")

            videoModal.innerHTML = `
                    <h1>Deu certo</h1>
                `;
            containerModal.appendChild(playVideo);
        });
    });
}

export { modal, myModalAtive, containerModal, showModal, openVideo }