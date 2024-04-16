import mangaService from '/js/service/mangaService.js';
import mangaView from '/js/view/mangaView.js';

async function init(path) {
  const manga = await mangaService.render(path); 
  mangaView.render(manga);

};



export default { init };