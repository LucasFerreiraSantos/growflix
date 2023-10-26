import { videos } from "./data.js";

const categoryGrowcast = document.getElementById("categoryGrowcast")
const categoryWebinarFlutter = document.getElementById("categoryWebinarFlutter")
const categoryUIUX = document.getElementById("categoryUIUX")
const categoryDiversos = document.getElementById("categoryDiversos")

function createCardsGrowcast(){
    videos[0].growcast.forEach(video => {
        const cardVideo = document.createElement("div")
        cardVideo.classList.add("col-3")
        cardVideo.classList.add("bg-black")
        cardVideo.classList.add("card")
        cardVideo.classList.add("text-center")
        cardVideo.classList.add("container-card")
        
        cardVideo.innerHTML = `
                <div>
                    <img class="image-thumbnail card-img-top" src="${video.img}" alt="thumbnail">
                </div>
                <div class="card-body text-light d-flex align-items-center">
                    <img class="image-cards" src="./img/svg/playtriangular.svg" alt="play triangular">
                    <span class="ms-3 ">${video.title}</span>
                </div>
        `
        categoryGrowcast.appendChild(cardVideo)
    });
}

function createCardsWebinar(){
    videos[1].webinarFlutter.forEach(video => {
        const cardVideo = document.createElement("div")
        cardVideo.classList.add("col-3")
        cardVideo.classList.add("bg-black")
        cardVideo.classList.add("card")
        cardVideo.classList.add("text-center")
        cardVideo.classList.add("container-card")
        
        cardVideo.innerHTML = `
                <div>
                    <img class="image-thumbnail card-img-top" src="${video.img}" alt="thumbnail">
                </div>
                <div class="card-body text-light d-flex align-items-center">
                    <img class="image-cards" src="./img/svg/playtriangular.svg" alt="play triangular">
                    <span class="ms-3 ">${video.title}</span>
                </div>
        `
        categoryWebinarFlutter.appendChild(cardVideo)
    });
}

function createCardsUIUX(){
    videos[2].jornadaUXUI.forEach(video => {
        const cardVideo = document.createElement("div")
        cardVideo.classList.add("col-3")
        cardVideo.classList.add("bg-black")
        cardVideo.classList.add("card")
        cardVideo.classList.add("text-center")
        cardVideo.classList.add("container-card")
        
        cardVideo.innerHTML = `
                <div>
                    <img class="image-thumbnail card-img-top" src="${video.img}" alt="thumbnail">
                </div>
                <div class="card-body text-light d-flex align-items-center">
                    <img class="image-cards" src="./img/svg/playtriangular.svg" alt="play triangular">
                    <span class="ms-3 ">${video.title}</span>
                </div>
        `
        categoryUIUX.appendChild(cardVideo)
    });
}

function createCardsDiversos(){
    videos[3].diversos.forEach(video => {
        const cardVideo = document.createElement("div")
        cardVideo.classList.add("col-3")
        cardVideo.classList.add("bg-black")
        cardVideo.classList.add("card")
        cardVideo.classList.add("text-center")
        cardVideo.classList.add("container-card")
        
        cardVideo.innerHTML = `
                <div>
                    <img class="image-thumbnail card-img-top" src="${video.img}" alt="thumbnail">
                </div>
                <div class="card-body text-light d-flex align-items-center">
                    <img class="image-cards" src="./img/svg/playtriangular.svg" alt="play triangular">
                    <span class="ms-3 ">${video.title}</span>
                </div>
        `
        categoryDiversos.appendChild(cardVideo)
    });
}

export { createCardsGrowcast, createCardsWebinar, createCardsUIUX, createCardsDiversos }