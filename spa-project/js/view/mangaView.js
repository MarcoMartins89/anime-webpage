import mangaController from '/js/controller/mangaController.js';

function render(manga) {
  const container = document.querySelector("#container");
  container.innerHTML = ""; //removes the previous elements
  const list = document.createElement("div");
  const buttonList = document.createElement('div');
  const button = document.createElement('button');

  list.style = `display: flex`;
  list.className = `text-center`;
  buttonList.id = 'buttonContainer'
  button.type = 'button';
  button.innerHTML = 'Next';
  button.className = 'btn btn-dark';
  button.id = 'next';
  container.className = 'bg-light';
  const nextLink = manga.links.next;
  const prevLink = manga.links.prev;

   manga.data.filter(manga => manga.attributes.synopsis != null && manga.attributes.averageRating > 75).forEach(manga => {
      let {synopsis, canonicalTitle, ageRatingGuide, status, startDate, endDate, averageRating, posterImage} = manga.attributes
      const item = document.createElement("div");
      item.className = `col text-black bg-light mb-3" style="max-width: 18rem;`;
        item.innerHTML = `<div style>
        <h1 class="card-title">${canonicalTitle}</h1>
                            <div class="body">
                            <br>
                                <center><img class="image" src="${posterImage.original}"></img></center>
                                <br>
                                <center><p align="justify" style="width: 50%" class="title">${synopsis}</p></center>
                                <br>
                                <p>Age Rating: ${ageRatingGuide}</p>
                                <p>Status: ${status}</p>
                                    <p>Start Date: ${startDate}</p>
                                    <p>End Date: ${endDate}</p>
                                    <p>Average Rating: ${averageRating}</p>
                                </p>
              
                        </div>`; 
                      
      list.appendChild(item);
  });

  container.appendChild(list);
  container.appendChild(buttonList);
  

  if (manga.links.prev != null){
    const button2 = document.createElement('button');
    button2.type = 'button';
  button2.innerHTML = 'Prev';
  button2.className = 'btn btn-dark';
  button2.id = 'Prev';
  buttonList.appendChild(button2);
  button2.addEventListener('click', () => {
    mangaController.init(prevLink);
    window.scrollTo(0, 0);
  })
  }

buttonList.appendChild(button);
  button.addEventListener("click", () => {
    mangaController.init(nextLink);
    window.scrollTo(0, 0);
  })


}


  
export default { render };