import React, { useState, useEffect } from "react";
import './App.css'
import { fetchData } from "../../apiCalls";
import ChampionsLoad from "../ChampionContainer/ChampionContainer";
// import TagForm from "../TagForm/TagForm";
import ChampionCard from "../ChampionCard/ChampionCard";
// export interface Champion {
//     version: string,
//     id: string,
//     key: string,
//     name: string,
//     title: string,
//     blurb: string,
//     info: {
//         attack: number,
//         defense: number,
//         magic: number,
//         difficulty: number
//     },
//     image: {
//         full: string,
//         sprite: string,
//         group: string,
//         x: number,
//         y: number,
//         w: number,
//         h: number,
//     },
//     tags: string[]
//     partype: string,
//     stats: {
//         hp: string,
//         hpperlevel: number,
//         mp: number,
//         mpperlevel: number,
//         movespeed: number,
//         armor: number,
//         armorperlevel: number,
//         spellblock: number,
//         spellblockperlevel: number,
//         attackrange: number,
//         hpregen: number,
//         hpregenperlevel: number,
//         mpregen: number,
//         mpregenperlevel: number,
//         crit: number,
//         critperlevel: number,
//         attackdamage: number,
//         attackdamageperlevel: number,
//         attackspeedperlevel: number,
//         attackspeed: number
//     }
// }
// interface AppProps {
//     champions: Champion[]
// }
// interface singleChampionProp {
//     champions: Champion[]
// }
// interface ResultProps {
//     tagline: string[];
//     champions: Champion[];
// }

const App = () => {
  const [appState, setAppState] = useState([])
  const [resultState, setResultState] = useState([])
  const [singleInfo, setSingleInfo] = useState([])

  useEffect(() => {
    fetchData().then((json) => {
      console.log('json', json[0])
      setAppState(json);
      console.log('appState', appState)
    }
    );
  }, []);

  const displayInfo = (event) => {
    event.preventDefault();
    const getChampion = appState.champions.filter((champion) => {
      return champion.title === event.target.id
    })
    setSingleInfo({ champions: getChampion })
    console.log(singleInfo)
  };

  return (
    < div className="App" >
      <h1 className="welcome-message">Lane In Your League</h1>
      < div className="champion-load">
        <h2>
          <ChampionsLoad characters={appState} displayInfo={displayInfo} />
        </h2>
      </div>
    </div >
  )
}
export default App;