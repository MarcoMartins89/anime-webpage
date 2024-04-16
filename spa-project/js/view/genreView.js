import genreController from "/js/controller/genreController.js";

function render(genres) {
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

  const nextPage = genres.links.next;
  const prevPage = genres.links.prev;
  console.log(genres);

  list.style = `display: flex`;
  list.className = `text-center`;

  const item = document.createElement("div");
  item.className = `col text-black bg-light sm-3" style="max-width: 18rem;`;
  item.innerHTML = `<div class="title" id="form">
  <br>
      <center><select class="form-control" id= "joca">
                            <option>Choose a Genre</option>
                            <option>action</option>
                            <option>drama</option>
                            <option>adventure</option>
                            <option>comedy</option>
                            <option>sci-fi</option>
                            <option>fantasy</option>
                            <option>romance</option>
                            </select>
                      
                            <select class="form-control style="mx-sm-2" id= "type">
                            <option>Choose a Type</option>
                            <option>anime</option>
                            <option>manga</option>
                            </select></center>
                           <br>
                        </div>`;

  list.appendChild(item);

  genres.data
    .filter(
      (genres) =>
        genres.attributes.synopsis != null && genres.attributes.synopsis != ""
    )
    .forEach((genres) => {
      let {
        synopsis,
        canonicalTitle,
        subtype,
        startDate,
        endDate,
        posterImage,
      } = genres.attributes;
      const item = document.createElement("div");
      item.className = `col text-black bg-light mb-3" style="max-width: 18rem;`;
      item.innerHTML = `<h1 class="title">${canonicalTitle}</h1>
                            <div class="body">
                                <center><img class="image" src="${posterImage.original}"></img></center>
                                <br>
                                <center><p align="justify" style="width: 50%" class="title">${synopsis}</p></center>
                                <p class="text">
                                <p>Type: ${subtype}</p>
                                    <p>Start Date: ${startDate}</p>
                                    <p>End Date: ${endDate}</p>
                                </p>
                        </div>`;
      console.log(genres.data);
      list.appendChild(item);
    });

  container.appendChild(list);
  container.appendChild(buttonContainer);

  if (prevPage != null) {
    const button2 = document.createElement("button");
    button2.type = "button";
    button2.innerHTML = "Prev";
    button2.className = "btn btn-dark";
    button2.id = "prev";
    buttonContainer.appendChild(button2);
    button2.addEventListener("click", () => {
      genreController.init(prevPage);
      window.scrollTo(0, 0);
    });
  }
  buttonContainer.appendChild(button);

  button.addEventListener("click", () => {
    genreController.init(nextPage);
    window.scrollTo(0, 0);
  });

  document.getElementById("type", "joca").addEventListener("input", () => {
    const type = document.getElementById("type").value;
    const joca = document.getElementById("joca").value;
    genreController.init(
      `https://kitsu.io/api/edge/${type}?filter[categories]=${joca}`
    );
  });
}

export default { render };
