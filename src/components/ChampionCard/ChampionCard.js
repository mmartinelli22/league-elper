import React from "react";
// import "./single-champion.css";

const ChampionCard = ({ champion, index, displayInfo }) => {
    const imgPrefix = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/';
    return (
        <div className="single-champion">
            <h1 className="champion-name">{champion.name}</h1>
            <h3>{champion.title}</h3>
            <img className="champion-img"
                key={`${champion.id}-${index}`}
                id={champion.id}
                title={champion.title}
                src={`${imgPrefix}${champion.image.full}`}
                onClick={() => displayInfo}

            />
        </div>

    )
}
export default ChampionCard;