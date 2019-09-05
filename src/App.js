import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import TodayDetails from './components/TodayDetails';
import NextDaysDetails from './components/NextDaysDetails';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

function App() {
  const [data, setData] = useState([]);
  const appID = 'd9806ebbcab7c4d4c0f87e873e32009e';

  const fetchData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (pos) {
        let coords = {
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        }
        let response = await axios(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${appID}/${coords.lat},${coords.long}?units=si`);
        setData(response.data);
      });
    }
  }

  useEffect(()=>{
    fetchData();
  }, []);
  
  const onRefresh = () => {
    fetchData();
  }
  return (
    <div className="App">
      <Route render = {({location})=> (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout = {300}>
            <Switch location={location}>
              <Route exact path="/" render={(props) => <Home
                currently={data.currently}
                daily={data.daily}
                timezone={data.timezone} {...props}
                onRefresh = {onRefresh}
              />}
              />
              <Route path="/todayDetails" render={(props) => <TodayDetails currently={data.currently} hourly={data.hourly} daily={data.daily} timezone={data.timezone} {...props}  {...props} />} />
              <Route path="/nextDaysDetails/:id" render={(props) => <NextDaysDetails daily={data.daily} {...props} />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      ) } />
    </div>
  );
}

export default App;
