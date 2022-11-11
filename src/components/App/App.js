import React, { useState, useEffect } from "react";
import './App.css'
import { fetchData } from "../../apiCalls";
import ChampionsLoad from "../ChampionContainer/ChampionContainer";
import TagForm from "../../TagForm/TagForm";
import { ChampionInfo } from "../IndividualChampion/IndividualChampion";
import { Route, Switch } from "react-router-dom";


const App = () => {
  const [appState, setAppState] = useState([])
  const [resultState, setResultState] = useState([])
  const [form, showForm] = useState(true)

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
  const findChampions = (e) => {
    e.preventDefault();
    console.log(e)
    const getChampion = appState.filter((champion) => {
      return champion.tags.includes(e.target.name)
    })
    setResultState(getChampion)
  }
  // const displayForm = () => {
  //   showForm(false)
  // }
  // const showFilterList = () => {
  //   showForm(true)
  // }

  return (
    < div className="App" >
      <Route
        exact
        path="/:id"
        render={({ match }) => {
          return (
            <ChampionInfo
              id={match.params.id}
              champion={appState}
              resetResultState={resetResultState}
            />
          );
        }}
      />

      <Switch>
        <div className="home-page">
          <Route exact path="/" render={() =>
            <div className="filter-button">
              <TagForm findChampions={findChampions} resetResultState={resetResultState} />
            </div>
          } />
          <Route exact path="/" render={() => !resultState.length ? <div className="champion-container"><ChampionsLoad characters={appState} /></div> : <div className="champion-container"><ChampionsLoad characters={resultState} /></div>} />
        </div>
      </Switch >
    </div >
  )
}
export default App;