import React from "react";
import ChampionCard from "../ChampionCard/ChampionCard";
import './ChampionContainer.css'
const ChampionsLoad = ({ characters, displayInfo }) => {
    const featureChampions = characters.map((character, index,) => {
        return (
            <ChampionCard
                champion={character}
                index={index}
                key={`${character.id}-${index}`}
                displayInfo={displayInfo}
            />

        )
    })
    return <div className="champion-container"><h2>{featureChampions}</h2></div>;
}
export default ChampionsLoad