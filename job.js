async function getPokemonPicture(pokemon){
    const URL = "https://api.pokemon.com/pokemon/gen-1/"
    const resp = await fetch(URL);
    const data = await resp.json();

    results.innerHTML = data.properties.picture.map(p => `
        <h1>Pokemon Name: ${p.name}</h1>
        <img src = "${p.picture}"
        `).join("");
}