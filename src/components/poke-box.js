import { leftBox, rightBox } from "./left-and-right.js";

const pokeBox = (nam, src, abs, stats) => {
    const main = document.createElement('div');
    main.setAttribute('id', 'poke-box');
    main.append(leftBox(nam, src), rightBox(abs, stats))
    return main;
}

export default pokeBox;