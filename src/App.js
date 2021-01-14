import React, { useState } from "react";
import Main from "./Main";
import requests from "./requests";
import Teams from "./Teams";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <section className={theme ? "white" : "dark"}>
      <Router>
        <header>
          <Link to="/">
            <h1>Football</h1>
          </Link>
          <button onClick={() => setTheme(!theme)} className="theme-btn">
            {theme ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </button>
        </header>
        <Route exact path="/">
          <Main
            theme={theme}
            title="English Premier League"
            fetchURL={requests.fetchPremierLeague}
          />
          <Main theme={theme} title="La Liga" fetchURL={requests.fetchLaLiga} />
          <Main
            theme={theme}
            title="Italian Serie A"
            fetchURL={requests.fetchSerieA}
          />
          <Main
            theme={theme}
            title="Bundesliga"
            fetchURL={requests.fetchBundesliga}
          />
        </Route>
        <Route path="/event/:id">
          <Teams fetchURL={requests.fetchTeamsBpl} />
        </Route>
      </Router>
    </section>
  );
};

export default App;
