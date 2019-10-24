import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Media from './Media';
import Members from './Members';
import News from './News';

import './styles/App.css';
import './styles/member_detail.css';
import './styles/members.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app-body">
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/members">
              <Members />
            </Route>
            <Route path="/media">
              <Media />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
