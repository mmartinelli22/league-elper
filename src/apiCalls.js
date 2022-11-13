const fetchData = async () => {
    try {
        const response = await fetch("https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json");
        if (!response.ok) {
            throw new Error('Sorry, we cant find the champions!')
        }
        else {
            const json = await response.json();
            const data = Object.keys(json.data).map((x) => json.data[x]);
            return data;
        }
    } catch (error) {
        console.log({
            error
        });
        throw error;
    }
}

export { fetchData };