import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import { faFutbol, faFlag, faMars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image from '../../images/male.png';
import image2 from '../../images/female.png';
import './TeamDetail.css';
import SocialFollow from '../SocialFollow/SocialFollow';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const TeamDetail = () => {

    const { idTeam } = useParams();
    const [teams, setTeams] = useState([]);
    // useState declared for alter the Team details.
    const [familiar, setFamiliar] = useState(false);
    const { strStadiumDescription, strDescriptionEN, strAlternate, strTeamLogo, strTeam, intFormedYear, strCountry, strSport, strGender, strTeamBanner } = teams;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams[0]))

    }, [idTeam])


    // Alternative team details.
    const alterTeam = familiar
        ? <div id="background" className="women-team">
            <div>
                <h3>{strAlternate} Women</h3>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                <p><FontAwesomeIcon icon={faFutbol} /> Sports type: {strSport}</p>
                <p><FontAwesomeIcon icon={faMars} /> Gender: Female</p>
                <button onClick={() => setFamiliar(!familiar)} className="btn btn-success">Alter Team  <FontAwesomeIcon icon={faArrowRight} /></button>
                <Link to="/Home" className="btn-home">
                    <FontAwesomeIcon icon={faHome} size="2x" />
                </Link>
            </div>
            <div>
                <img className="team-image" src={image2} alt="" />
            </div>
        </div>
        : <div id="background" className="men-team">
            <div>
                <h3>Fc {strTeam}</h3>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                <p><FontAwesomeIcon icon={faFutbol} /> Sports type: {strSport}</p>
                <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                <button onClick={() => setFamiliar(!familiar)} className="btn btn-success">Alter Team  <FontAwesomeIcon icon={faArrowRight} /></button>
                <Link to="/Home" className="btn-home">
                    <FontAwesomeIcon icon={faHome} size="2x" />
                </Link>
            </div>
            <div>
                <img className="team-image" src={image} alt="" />
            </div>
        </div>

    return (
        <div className="team-container">
            <div className="background-image" style={{
                backgroundImage: `url(${strTeamBanner})`
            }}>
                <img src={strTeamLogo} alt="" />
            </div>
            <div className="team-detail">
                <div>
                    {alterTeam}
                </div>

                <div className="team-description">

                    <p><strong>Team Description:</strong> {strDescriptionEN}</p>
                    <br />
                    <p><strong>Stadium Description: </strong> {strStadiumDescription}</p>
                </div>

            </div>
            <div>
                <SocialFollow team={teams}></SocialFollow>
            </div>
        </div>

    );
};

export default TeamDetail;