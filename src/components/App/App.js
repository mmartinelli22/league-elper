import React, { useState, useEffect } from "react";
import './App.css'
import { fetchData } from "../../apiCalls";
import ChampionsLoad from "../ChampionContainer/ChampionContainer";
import TagForm from "../../TagForm/TagForm";
// import TagForm from "../TagForm/TagForm";
import ChampionCard from "../ChampionCard/ChampionCard";
import { ChampionInfo } from "../IndividualChampion/IndividualChampion";
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

const App = () => {
  const [appState, setAppState] = useState([])
  const [resultState, setResultState] = useState([])
  const [singleInfo, setSingleInfo] = useState([])
  const [imageClicked, clickImage] = useState(false)

  useEffect(() => {
    fetchData().then((json) => {
      console.log('json', json[0])
      setAppState(json);
      console.log('appState', appState)
    }
    );
  }, []);
  const resetResultState = () => {
    setResultState([])
  }
  const displayInfo = (e) => {
    console.log(e)
    clickImage(true)
    const singleChampion = appState.filter((champion) => {
      return champion.id.includes(e.target.id)
    })
    setSingleInfo(singleChampion)
    console.log(singleChampion)
  }

  const findChampions = (e) => {
    e.preventDefault();
    console.log(e)
    const getChampion = appState.filter((champion) => {
      return champion.tags.includes(e.target.name)
    })
    setResultState(getChampion)
  }


  return (
    < div className="App" >
      <div className="filter-button">
        <TagForm findChampions={findChampions} resetResultState={resetResultState} />
      </div>
      <h1 className="welcome-message">Lane In Your League</h1>
      {singleInfo.length ? <div className="sinlge-champion"><ChampionInfo champion={singleInfo[0]} /></div> :
        <div className="champion-container">
          {!resultState.length ?
            <ChampionsLoad characters={appState} displayInfo={displayInfo} />


            :
            <ChampionsLoad characters={resultState} displayInfo={displayInfo} />

          }



        </div>
      }
    </div>
    // < div className="champion-load">
    //   <h2>
    //   </h2>
    // </div>
  )
}
export default App;