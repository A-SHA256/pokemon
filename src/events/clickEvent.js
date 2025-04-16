import clickHandler from "../handlers/clickHandler.js";

const btn = document.getElementById('btn');
const input = document.getElementById('input');

export const eventClick = () => btn.addEventListener('click', clickHandler);

export const eventKey = () => input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        clickHandler();
    }
});