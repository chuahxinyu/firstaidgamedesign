import React from 'react'
// import gameplay1 from "./Gameplay1.png"
import Typical from 'react-typical'

export default function WhatSection() {
    return (
        <div className="section">
          <div style={{paddingTop:100}}></div>
            <h1>FIRST AID: the game design</h1>
              <p style={{marginLeft: "5%", marginRight: "5%"}}>
                > This is the game design document for the game that I pitched in <a href="https://firstaidgameconcept.netlify.app/" target="_blank" rel="noreferrer"><u>project 1</u></a> so make sure to go through that before reading this because the pitch goes through the core concept of the game, why a game like this is important and gave a taste of what the look and feel of the game will look like; whereas this project will be going into more detail about what the game will actually be like, potential ways to develop it and with more focus on the mechanics and gameplay.
              </p>
            <h2>Core loop: What does the player do in the game?</h2>
            <div className="content">
              <p>
                The main goal for the player is the same as the that of a first aider in real life:<Typical
                  steps={[
                    " preserve life", 3000,
                    " prevent further injury", 3000,
                    " promote recovery", 3000]}
                  loop={Infinity}
                  wrapper="b"
                />
              </p>
              <br></br>
              <p>
                Inspired by how actual first aid training courses are run, the game is made up of multiple <i>stories</i> with each story either teaching the player a new first aid concept, idea or skill, or getting the player to apply the knowledge learnt from previous stories to a realistic scenario. Thus, teaching the player through practical play.
              </p>
              
              <br></br>
              <img src="proto4.png" alt="prototype choices and actions"></img>
              <br></br>
              <p>
                The core of the game revolves around choices and actions. The player is presented with a whole host of choices for actions that they can do - what to do first: check if the person is bleeding or check if they're breathing? - who to help first: the person who is conscious or unconscious? And not choosing is also a choice - albeit, one that usually leads to less favorable outcomes. An action that you decide to do now determines the actions that you are able to do later and ultimately dictates the ending to the story.
              </p>

              <br></br>
              <img src="flowchart.png" alt="prototype chapters level"></img>
              <p className="special">
                Image: Flowchart of the prototype level containing all of the actions and choices available to the player along with the events that unfold after.
              </p>
              <br></br>
              
              <p>
                Players play as a different character in every story. Playing as anyone anywhere not only allows the game to be able to appeal to a greater audience but also captures the fact that we could all find ourselves in situations that require first aid at any point in our lives and further highlights the importance of why first aid training and knowledge should be universal.
              </p>
            </div>
            <h2>Progression</h2>
            <div className="content">
              
              <p>
                Every level in the game is like a chapter in a textbook, teaching a specific part of first aid through a scenario. There are multiple endings for each level, some endings allow the player to unlock the next level while other endings signify that the player still has more to learn from the level.
              </p>
              <br></br>
              <p>
                Levels are not exclusively linear and can branch at certain points, giving the player the opportunity to further develop specific interests while not forcing them to learn others.
              </p>
              <br></br>
              <img src="proto2.png" alt="prototype chapters level"></img>
              <br></br>
              <p className="special">
                Image: A rough prototype of what the level/chapter menu could look like.
              </p>
            </div>
            <h2>Onboarding</h2>
            <div className="content">
              <p>
                This is a game will teach the player a lot of things that they did not know about before; from first aid content to the actual controls of how to play the game. As such, the tutorials should be clear but concise and be integrated into the gameplay, and not get in the way of it.
              </p>
              <br></br>
              <img src="detroit.gif" alt="detroit tutorial gif"></img>
              <br></br>
              <p className="special">
                Image: An example of a tutorial embedded in gameplay from Detroit: Become Human.
              </p>
            </div>
            <h2>Art, Sound and Music</h2>
            <div className="content">
              <p>
                The characters and environments in the game have to look and feel as realistic and true to life as possible. This is critically important not only for anatomical accuracy but also to ensure that players are able to emotionally connect and feel immersed in the game. Visually, characters must be anatomically accurate to the point of players being able to recognise and identify body parts in real life. Sound and music in the game are also pivotal in recreating a realistic atmosphere. The game should trigger the player to feel a wide range of emotions, from the stress and anxiety of standing in a sea of multiple casualties crying for help to the joy of helping to save a life. 
              </p>
            </div>
        </div>
    )
}
