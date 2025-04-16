import pokeBox from "../components/poke-box.js";
import data from "../data.js";
import dom from "../dom.js";
import { getData } from "../api.js";

const clickHandler = async () => {
    const id = document.getElementById('input');
    const res = await getData(id.value);
    const ifExist = document.getElementById('poke-box');
    if (ifExist) {
      ifExist.remove();
    }
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
  };

  export default clickHandler;




