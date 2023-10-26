console.log(videos)
const categoryGrowcast = document.getElementById("categoryGrowcast")


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

}

createCardsGrowcast()


function showDescription(){
    const cardBody = document.getElementsByClassName("card-body")
    return cardBody.style.display = "block"
}

const containerCard = document.getElementsByClassName("container-card")
containerCard.document.addEventListener("mouseover", showDescription)
