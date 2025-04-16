export const getData = async(id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (res.status !== 200) {
            throw new Error;
        }
        return res.json();
    }
    catch(err) {
        console.error(err);
    }
};