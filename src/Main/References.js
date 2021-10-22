import React from 'react'
import { FaApple, FaWindows } from 'react-icons/fa'

export default function References() {
    return (
        <div classname="section">
            <h1>PROTOTYPE / PROOF OF CONCEPT</h1>
            <div className="content">
                <img src="proto1.png" alt="prototype chapters level"></img>
                <p>
                    
                </p>
                <div className="why-columns">
                    <div className="navbar-btn special why-col">
                        <FaApple style={{paddingRight:"5px"}} />
                        <a href="https://firstaidgameconcept.netlify.app/" target="_blank" rel="noreferrer">
                            Mac Installation
                        </a>
                        
                    </div>
                    <div className="navbar-btn special why-col">
                        <FaWindows style={{paddingRight:"5px"}} />
                        Windows Installation
                    </div>
                </div>
                
            </div>
        </div>
    )
}
