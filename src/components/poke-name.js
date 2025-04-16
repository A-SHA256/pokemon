const pokeName = (text) => {
    const title = document.createElement('h1');
    title.classList.add('poke-name');
    title.innerText = text;
    return title;
}
export default pokeName;