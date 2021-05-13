import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css';
import backgroundImage from '../../images/league-banner.png';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <div className="teams-container">
            <div className="header-image" style={{
                backgroundImage: `url(${backgroundImage})`
            }}>
                <h1>Team Tracker</h1>
            </div>
            <div className="teams-display">
                {
                    teams.map(team => <Teams team={team}></Teams>)
                }
            </div>

        </div>
    );
};

export default Home;