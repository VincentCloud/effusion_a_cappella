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
import './styles/carousel.css';
import './styles/media.css';
import './styles/member_detail.css';
import './styles/members.css';
import './styles/news.css';

import sampleData from './sampleData';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
          <Route path="/" exact={true}>
            <Home images={sampleData.homeImages} />
          </Route>
          <div className="app-body">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/news">
                <News
                  posts={sampleData.news.map(post => ({
                    ...post,
                    date: new Date(post.date)
                  }))}
                />
              </Route>
              <Route path="/members">
                <Members members={sampleData.members} />
              </Route>
              <Route path="/media">
                <Media mediaItems={sampleData.media} />
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
