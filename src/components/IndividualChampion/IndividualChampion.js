import React from "react";
import './IndividualChampion.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export const ChampionInfo = ({ champion, id, resetResultState, showFilterList }) => {
    console.log('id', id)
    const imgPrefix = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/';
    const findChamp = champion.find((character) => {
        return character.name === id
    });
    return (
        <div className="single-champion-details">
            <img className="champion-details-img"
                key={`${findChamp.id}`}
                id={findChamp.id}
                title={findChamp.title}
                src={`${imgPrefix}${findChamp.image.full}`}
            />
            <h2 className="champion-details-name">{findChamp.name}</h2>
            <h3 className="champion-details-title">{findChamp.title}</h3>
            <article>{findChamp.blurb}</article>
            <p>{findChamp.tag}</p>
            <h5 className="'champion-details-tags">Champions Tags: {findChamp.tags.join(' ,')}</h5>
            <Link to='/'>
                <button onClick={() => [resetResultState(), showFilterList()]}>Return to Champions List</button>
            </Link>
        </div>

    )
}