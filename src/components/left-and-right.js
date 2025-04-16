import pokeName from "./poke-name.js";
import pokeImg from "./poke-img.js";
import pokeAbs from "./poke-abs.js";
import pokeStats from "./poke-stats.js";

export const leftBox = (nam, src) => {
    const left = document.createElement('div');
    left.setAttribute('id', 'left');
    left.append(pokeName(nam), pokeImg(src));
    return left;
}

export const rightBox = (abs, stats) => {
    const right = document.createElement('div');
    right.setAttribute('id', 'right');
    right.append(pokeAbs(abs), pokeStats(stats));
    return right;
}
