import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTools, faCreditCard } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    return (
        <div className="navbar-container">
            <Link to='/expenses'>
                <FontAwesomeIcon icon={faCreditCard} className="button-icon" />
            </Link>
            <Link>
                <FontAwesomeIcon icon={faTasks} className="button-icon" />
            </Link>
            <Link>
                <FontAwesomeIcon icon={faTools} className="button-icon" />
            </Link>
        </div>
    )
}

