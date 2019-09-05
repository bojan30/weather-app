import React from 'react';
import generateIcon from '../helpers/generateIcon';
import '../weather-icons.min.css';
import DayForecast from './DayForecast';
import dateFormat from '../helpers/dateFormat';
import WeatherCondition from './WeatherCondition';
import generateConditions from '../helpers/conditionsGenerator';

const Home = ({timezone, currently, daily, history, onRefresh}) => {
    const handleRefresh = () => {
        onRefresh();
    }
    if(currently){
        let dateArr = dateFormat(currently.time);
        let conditionNames = [
            { name: 'Reel feel', key: 'apparentTemperature', icon: 'fas fa-thermometer-three-quarters'},
            { name: 'Precipitation', key: 'precipProbability', icon: 'fas fa-umbrella'},
            { name: 'UV Index', key: 'uvIndex', icon: 'fas fa-sun'},
            { name: 'Humidity', key: 'humidity', icon: 'fas fa-tint'}
        ];
        let conditions = generateConditions(currently, conditionNames);
        return (
            <div className="container">
                <div onClick={() => history.push('/todayDetails')} className="current-weather-wrapper">
                    <div className="city-wrapper">
                        <i className="fas fa-map-marker-alt"></i>
                        <p className="city-name">{timezone.split('/')[1]}</p>
                    </div>
                    <div className="current-date">
                        {`${dateArr[0]}, ${dateArr[1]} ${dateArr[2]}`}
                    </div>
                    <div className="basic-weather">
                        <div className="weather-icon" dangerouslySetInnerHTML={{ __html: generateIcon(currently.icon) }}></div>
                        <div className="current-temperature">
                            {Math.round(currently.temperature) + '°C'}
                        </div>
                        <div className="min-max-temperature">
                            <div className="max">
                                {Math.round(daily.data[0].temperatureMax) + '°C'}
                            </div>
                            <div className="min">
                                {Math.round(daily.data[0].temperatureMin) + '°C'}
                            </div>
                        </div>
                    </div>
                    <div className="weather-summary">
                        {currently.summary}
                    </div>
                </div>
                <div className="weather-conditions-wrapper">
                    {
                        conditions.map(condition=>{
                            return (
                                <WeatherCondition key = {condition.name} condition = {condition} />
                            );
                        })
                    }
                </div>
                <div className="next-week-forecast-wrapper">
                    {
                        daily.data.filter((e, index) => index !== 0 && index !== 7).map((day, index) => {
                            return (
                                <DayForecast history={history} index={index} key={day.time} day={day} />
                            );
                        })
                    }
                </div>
                <div className="footer">
                    <div className="refresh" onClick = {handleRefresh}>
                        <i className="fas fa-sync-alt"></i>
                    </div>
                    <p>Updated on {dateArr[0]}, {dateArr[1]} {dateArr[2]}, {dateArr[4]}</p>
                    <p>Powered by <a href="https://darksky.net/poweredby/" target="_blank" rel="noopener noreferrer">Dark Sky</a></p>
                </div>
            </div>
        );
    }else{
        return (
            <div className = "container loader">
                <i className="fas fa-spinner"></i>
            </div>
        );
    }
}

export default Home;