function render(path = `https://kitsu.io/api/edge/anime?filter[categories]=`) {
console.log();  
return showGenres(path);
}

async function fetchGenres(path) {
  const api = path;

  const response = await fetch(api);
  const body = await response.json();

  if (!response.ok) {
    throw new Error(body.message); // throwing inside async rejects the returned promise
  }

  return body;
}

async function showGenres(path) {
  try {
    const user = await fetchGenres(path);
    /* user.data[0].attributes.canonicalTitle.array.forEach(element => {
            
        }); */

    return user;
  } catch (err) {
    console.log(err.message);
  }
}

export default { render };
