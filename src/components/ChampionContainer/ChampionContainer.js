import React from "react";
import ChampionCard from "../ChampionCard/ChampionCard";
import './ChampionContainer.css'
const ChampionsLoad = ({ characters, displayForm }) => {
    const featureChampions = characters.map((character, index,) => {
        return (
            <ChampionCard
                champion={character}
                index={index}
                key={`${character.id}-${index}`}
                displayForm={displayForm}
            />

        )
    })
    return <div className="champion-container"><h2 className="feature-champions-key">{featureChampions}</h2></div>;
}
export default ChampionsLoad