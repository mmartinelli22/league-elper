import React from "react";
import './ChampionCard.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from 'prop-types'

const ChampionCard = ({ champion, displayForm }) => {
    const imgPrefix = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/';
    return (
        <Link to={`/${champion.id}`}>
            <div className="single-champion">
                <h1 className="champion-name">{champion.name}</h1>
                <h3 > {champion.title}</h3>

                <img className="champion-img"
                    key={`${champion.id}`}
                    id={champion.id}
                    title={champion.title}
                    src={`${imgPrefix}${champion.image.full}`}
                    onClick={() => displayForm()}

                />
            </div>
        </Link>

    )
}
export default ChampionCard;
ChampionCard.propTypes = {
    champion: PropTypes.array,
    displayForm: PropTypes.func
}
