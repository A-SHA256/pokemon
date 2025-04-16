const pokeImg = (link) => {
    const img = document.createElement('img');
    img.classList.add('poke-img');
    img.src = link;
    return img;
}

export default pokeImg;