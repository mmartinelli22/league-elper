const fetchData = async () => {
    const response = await fetch("https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json");
    const json = await response.json();
    const data = Object.keys(json.data).map((x) => json.data[x]);
    return data;
};

export { fetchData };