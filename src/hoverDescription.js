function hoverDescription(){
    const container = document.querySelectorAll(".container-card")
    const arrayContainer = [...container]
    const containerCard = document.querySelectorAll("#hoverText")
    const arrayContainerCard = [...containerCard]
    console.log(arrayContainerCard)

    arrayContainer.forEach((item) => {
        arrayContainerCard.forEach((cardSelect) => {
            item.addEventListener("mouseover", () => {
                cardSelect.classList.remove("d-none")
                cardSelect.classList.add("d-block")
            })
            item.addEventListener("mouseout", () => {
                cardSelect.classList.remove("d-block")
                cardSelect.classList.add("d-none")
            })
        })
    })
}

export { hoverDescription } 