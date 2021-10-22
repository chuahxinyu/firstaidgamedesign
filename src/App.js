import './App.css';
import WhatSection from "./Main/WhatSection";
import References from "./Main/References"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import {
  ScrollingProvider,
  Section,
} from 'react-scroll-section';
import Navbar from './Main/Navbar';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div className="background"></div>
            <ScrollingProvider>
              <Navbar />
              <Section id="what"><WhatSection /></Section>     
              <Section id="references"><References /></Section>
            </ScrollingProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
