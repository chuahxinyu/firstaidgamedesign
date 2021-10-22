import React from 'react'
import Typical from 'react-typical'

export default function WhySection() {
    return (
        <div className="section">
            <div className="cprstat"></div>
            <div className="content">
              <p>
                T
              </p>
              <div>
              <h3>
                FIRST AID 
                <Typical
                  steps={[
                    " SAVES LIVES.", 5000,
                    " PROVIDES COMFORT", 3000,
                    " PRESERVES LIVELIHOODS", 3000,
                    " ALLEVIATES SUFFERING", 3000]}
                  loop={Infinity}
                  wrapper="b"
                />
              </h3>
            </div>
              <div className="why-columns">
                <div className="why-col">
                  <p className="col-heading">Increases first aid awareness</p>
                  <p>
                    
                  </p>
                  <br></br>
                  <p>
                    
                  </p>
                  <br></br>
                  <p>
                    
                  </p>
                  <br></br>
                  <p>
                    
                  </p>
                  <br></br>
                  <p>
                    
                  </p>
                </div>
                <div className="why-col col-border">
                  <p className="col-heading">Strengthen knowledge and confidence</p>
                  <p>
                    
                  </p>
                  <br></br>
                  <p>
                    
                  </p>
                  <br></br>
                  <p>
                    
                  </p>
                </div>
              </div>
            <br></br>
            </div>
          </div>
    )
}
