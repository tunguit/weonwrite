import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import CreateCampaign from './components/campaign/create-campaign';
import DetailCampaign from './components/campaign/detail-campaign';
import Readme from './components/readme/readme';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      content: [

      ] 
    };
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="homeContainer">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/new-campaign" component={CreateCampaign} />
                <Route exact path="/detail-campaign" component={DetailCampaign} />
                <Route exact path="/read-me" component={Readme} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
