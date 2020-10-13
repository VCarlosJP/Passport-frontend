import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign, faTasks, faTools } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    return (
        <div className="navbar-container">
                   
        <FontAwesomeIcon icon={faEuroSign} className="button-icon" />
    
        <FontAwesomeIcon icon={faTasks} className="button-icon" />
    
        <FontAwesomeIcon icon={faTools} className="button-icon" />
                
                
                
                
                
            
   
        </div>

        
    )
}

