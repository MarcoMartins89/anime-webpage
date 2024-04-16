function render(onClick) {
    console.log(onClick)
    const container = document.querySelector("#container");
    const button = document.createElement("button");
    const div = document.createElement("div");
    const img = document.createElement('img');


    img.src= 'https://t.ctcdn.com.br/kdHUJ1yriNF7dqSdX2sXb4OTav4=/340x265:1654x1005/1314x739/smart/i521747.jpeg';
    div.appendChild(img);


    div.className = `text-center`;
    div.style = `align-items: center;
    background-color: black;`;
    button.className = `btn`;
    button.type = `button`;
    button.style = `margin-top: 2%; margin-bottom: 6.5%; background-color: red; color: white`;
    img.id = 'homeImg';
    div.appendChild(button);
    
    container.innerHTML = ""; //removes the previous elements
    button.innerText = `Sugestions`;
    
    button.addEventListener("click", async (e) => {
        e.preventDefault();
        
        const {
            title,
            year,
            director,
            imdbRating: rating,
        } = await onClick(parseInt(Math.random() * 6));
        
        const elem = document.createElement("div");
        //elem.className = `text-center`;
        

        elem.innerHTML = `<h1>${title}</h1>
        <h3>${year}</h3>
        <h3>${director}</h3>
        <h3>${rating}</h3>`;
        
        
        if (container.childElementCount > 1) {
            container.removeChild(container.lastChild);
        }

        container.appendChild(elem);

    });

    container.appendChild(div);
}

export default { render };
