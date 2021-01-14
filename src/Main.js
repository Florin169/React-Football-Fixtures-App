import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = ({ fetchURL, title, theme }) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchURL);
      setMatches(response?.data.events);
      console.log(response);
    }
    fetchData();
  }, [fetchURL]);

  return (
    <section className={`${theme ? "white-light" : "dark-light"} container`}>
      <div className="leagues">
        <h1>{title}</h1>
      </div>
      {matches.map((match) => {
        return (
          <Link to={`/event/${match.idEvent}`}>
            <div
              className={`${theme ? "white-lighter" : "dark"} matches`}
              key={match.idEvent}
            >
              <p>{match.strHomeTeam}</p>
              <span>{match.strStatus ? match.strTime : match.strStatus}</span>
              <p>{match.strAwayTeam}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Main;
