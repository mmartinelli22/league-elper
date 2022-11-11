import React from "react";
import './ChampionCard.css'

const ChampionCard = ({ champion, displayInfo }) => {
    const imgPrefix = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/';
    return (
        <div className="single-champion">
            <h1 className="champion-name">{champion.name}</h1>
            <h3>{champion.title}</h3>
            <img className="champion-img"
                key={`${champion.id}`}
                id={champion.id}
                title={champion.title}
                src={`${imgPrefix}${champion.image.full}`}
                onClick={(e) => displayInfo(e)}

            />
        </div>

    )
}
export default ChampionCard;