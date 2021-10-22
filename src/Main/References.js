import React from 'react'
import { FaApple, FaWindows } from 'react-icons/fa'

export default function References() {
    return (
        <div classname="section">
            <h1>PROTOTYPE / PROOF OF CONCEPT</h1>
            <div className="content">
                <p>
                    The prototype is very short and incomplete, mostly displaying the mechanics and a rough wireframe of what gameplay could look like. All objects in the prototype are placeholders and will obviously look and feel much better if the game were to be further developed.
                </p>
                <br></br>
                <img src="proto1.png" alt="prototype chapters level"></img>
                
                <div className="why-columns">
                    <div className="navbar-btn special why-col">
                        <FaApple style={{paddingRight:"5px"}} />
                        <a href="https://github.com/chuahxinyu/FirstAidGameDesignAndPrototype/releases/download/prototype/FirstAidGamePrototype-Mac.zip" target="_blank" rel="noreferrer">
                            Mac Installation
                        </a>
                    </div>
                    <div className="navbar-btn special why-col">
                        <FaWindows style={{paddingRight:"5px"}} />
                        <a href="https://github.com/chuahxinyu/FirstAidGameDesignAndPrototype/releases/download/prototype/FirstAidGamePrototype-Windows.exe" target="_blank" rel="noreferrer">
                            Windows Installation
                        </a>
                    </div>
                </div>
                <p>TO MAC USERS (like you, David): Please use this <a href="https://github.com/chuahxinyu/FirstAidGameDesignAndPrototype/blob/master/mac_instructions.md" target="_blank" rel="noreferrer"><u>
                    Mac Installation Guide
                </u></a></p>
                
            </div>
        </div>
    )
}
