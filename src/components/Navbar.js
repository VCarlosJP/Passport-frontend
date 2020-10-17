import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTools, faCreditCard } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    return (
        <div className="navbar-container">
                   
        <FontAwesomeIcon icon={faCreditCard} className="button-icon" />
    
        <FontAwesomeIcon icon={faTasks} className="button-icon" />
    
        <FontAwesomeIcon icon={faTools} className="button-icon" />
                
                
                
                
                
            
   
        </div>

        
    )
}

