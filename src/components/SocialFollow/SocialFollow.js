import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css';

const SocialFollow = (props) => {
    
    const { strInstagram, strTwitter, strFacebook, strYoutube} = props.team;
    
    return (
        <div className="social-container">
            <h3>Social Follow</h3>
            <a href={strYoutube}
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href={strFacebook}
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href={strTwitter} className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href={strInstagram} className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    );
};

export default SocialFollow;