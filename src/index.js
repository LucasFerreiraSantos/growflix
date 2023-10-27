import { videos } from "./data.js";
import { createCardsGrowcast, createCardsWebinar, createCardsUIUX, createCardsDiversos } from "./functionsCreateCards.js";
import { showModal } from "./modal.js";

console.log(videos)

showModal()
createCardsGrowcast()
createCardsWebinar()
createCardsUIUX()
createCardsDiversos()
