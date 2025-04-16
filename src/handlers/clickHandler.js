import pokeBox from "../components/poke-box.js";
import data from "../data.js";
import dom from "../dom.js";
import { getData } from "../api.js";

const clickHandler = async () => {
    const id = document.getElementById('input');
    console.log(typeof id.value);
    const ifExist = document.getElementById('poke-box');
    if (ifExist) {
      ifExist.remove();
    }
    if (isNaN(Number(id.value)) || Number(id.value) === 0) {
      const warning = document.createElement('h1');
      warning.setAttribute('id', 'poke-box');
      warning.innerText = 'Please enter a number';
      document.body.append(warning);
    } else {
      const res = await getData(id.value);
      if (!(res.id in data.chars)) {
        data.chars[res.id] = res;
        dom.box[res.id] = pokeBox(
          data.chars[res.id].name,
          data.chars[res.id].sprites['front_default'],
          data.chars[res.id].abilities,
          data.chars[res.id].stats
        );
        document.body.append(dom.box[res.id]);
      } else {
          document.body.append(dom.box[res.id]);
      }
    }
  };

  export default clickHandler;




