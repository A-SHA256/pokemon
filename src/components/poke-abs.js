const pokeAbs = (abs) => {
    const box = document.createElement('div');
    box.setAttribute('id', 'abilities');
    const header = document.createElement('h1');
    header.innerText = 'Abilities';
    const abilities = document.createElement('ul');
    abs.forEach(ab => {
        const li = document.createElement('li');
        li.innerText = ab.ability.name;
        abilities.append(li);
    });
    box.append(header, abilities);
    return box;
}
export default pokeAbs;