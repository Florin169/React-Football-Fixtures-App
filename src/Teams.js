import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Teams = ({ fetchURL }) => {
  const [teams, setTeams] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=${id}`
      );
      setTeams(response?.data.events[0]);
      console.log(response);
    }
    fetchData();
  }, [fetchURL]);

  return (
    <section className="team-details">
      <div className="teams-names">
        <div className="team">
          <h1>{teams.strHomeTeam}</h1>
        </div>
        <div className="score">
          <span>
            {teams.intHomeScore} - {teams.intAwayScore}
          </span>
        </div>
        <div className="team">
          <h1>{teams.strAwayTeam}</h1>
        </div>
      </div>
      <img src={teams.strThumb} alt={teams.strCountry} />
    </section>
  );
};

export default Teams;
