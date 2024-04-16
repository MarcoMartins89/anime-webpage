function render(path = "https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0") {
    return showManga(path);
}

async function fetchManga(path) {
    const api = path;
    const response = await fetch(api);
    const body = await response.json();

    if (!response.ok) {
        throw new Error(body.message); // throwing inside async rejects the returned promise
    }

    return body;
}

async function showManga(path) {
    try {
        const user = await fetchManga(path);
        /* user.data[0].attributes.canonicalTitle.array.forEach(element => {
            
        }); */
        
      return user;

        
    } catch (err) {
        console.log(err.message);
    }

}

export default {render};