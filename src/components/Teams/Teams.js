import React from 'react';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Teams = (props) => {
    const { idTeam, strTeamLogo, strTeam, strSport } = props.team;

    // Data loaded dynamically.
    const history = useHistory();
    const showTeamDetail = idTeam => {
        const url = `team/${idTeam}`;
        history.push(url);
    }

    return (
        <div className="teams-div">
            <div className="team-card">
                <img className="team-logo" src={strTeamLogo} alt="" />
                <h2>{strTeam}</h2>
                <h4>Sports type: {strSport} </h4>
                <button onClick={() => showTeamDetail(idTeam)} className="btn btn-success">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Teams;