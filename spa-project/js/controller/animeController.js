import animeService from "/js/service/animeService.js";
//import animeService from "./service/animeService.js";
import animeView from "/js/view/animeView.js";

async function init(path) {
    const animes = await animeService.render(path);
    animeView.render(animes);
}

export default { init };
