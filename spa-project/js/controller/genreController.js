import genreView from '/js/view/genreView.js';
import genreService from '/js/service/genreService.js';

async function init(path) {
  const genre = await genreService.render(path); 
  genreView.render(genre);
};

export default { init };
