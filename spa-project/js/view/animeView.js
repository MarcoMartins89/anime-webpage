import animeController from '/js/controller/animeController.js'

function render(animes) {
  const container = document.querySelector("#container");
  container.innerHTML = ""; //removes the previous elements
  const list = document.createElement("div");
  const buttonContainer = document.createElement("div");
  const button = document.createElement("button");
  container.className = "bg-light";

  buttonContainer.id = "buttonContainer";
  button.type = "button";
  button.innerHTML = "Next";
  button.className = "btn btn-dark";
  button.id = "next";

  const nextPage = animes.links.next;
  const prevPage = animes.links.prev;
    console.log(animes.links.prev);

  list.style = `display: flex`;
  list.className = `text-center`;

  animes.data
    .filter(
      (manga) =>
        manga.attributes.synopsis != null && manga.attributes.averageRating > 75
    )
    .forEach((anime) => {
      let {
        synopsis,
        canonicalTitle,
        ageRatingGuide,
        subtype,
        startDate,
        endDate,
        averageRating,
        posterImage,
      } = anime.attributes;
      const item = document.createElement("div");
      item.className = `col text-black bg-light mb-3" style="max-width: 18rem;`;
      item.innerHTML = `<h1 class="title">${canonicalTitle}</h1>
                            <div class="body">
                                <center><img class="image" src="${posterImage.original}"></img></center>
                                <br>
                                <center><p align="justify" style="width: 50%" class="title">${synopsis}</p></center>
                                <p class="text">
                                <p>Age Rating: ${ageRatingGuide}</p>
                                <p>Media Type: ${subtype}</p>
                                    <p>Start Date: ${startDate}</p>
                                    <p>End Date: ${endDate}</p>
                                    <p>Average Rating: ${averageRating}</p>
                                </p>
                        </div>`;
      console.log(animes.data);
      list.appendChild(item);
    });

  container.appendChild(list);
  container.appendChild(buttonContainer);
  
  if(prevPage != null) {
      const button2 = document.createElement('button');
      button2.type = "button";
      button2.innerHTML = "Prev";
      button2.className = "btn btn-dark";
      button2.id = "prev";
      buttonContainer.appendChild(button2); 
      button2.addEventListener('click', () => {
        animeController.init(prevPage);
        window.scrollTo(0, 0);
    })
    }
    buttonContainer.appendChild(button);

    button.addEventListener('click', () => {
        animeController.init(nextPage);
        window.scrollTo(0, 0);
    }) 
   
}

export default { render };
