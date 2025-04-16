const pokeStats = (stats) => {
    const box = document.createElement('div');
    box.setAttribute('id', 'stats');
    const header = document.createElement('h1');
    header.innerText = 'Statistics';
    const statistics = document.createElement('ul');
    stats.forEach(stat => {
        const li = document.createElement('li');
        li.innerText = stat.stat.name + ':' + '\t' + stat['base_stat'];
        statistics.append(li);
    });
    box.append(header, statistics);
    return box;
}

export default pokeStats;