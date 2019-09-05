import React from 'react';
import TemperatureChart from './TemperatureChart';
import '../weather-icons.min.css';
import generateIcon from '../helpers/generateIcon';
import {Link} from 'react-router-dom';
import WeatherCondition from './WeatherCondition';
import generateConditions from '../helpers/conditionsGenerator';
import dateFormat from '../helpers/dateFormat';

const TodayDetails = ({currently, hourly, daily, timezone}) => {
    if(hourly){
        let dateArr = dateFormat(currently.time);
        let conditionNames = [
            { name: 'Reel feel', key: 'apparentTemperature', icon: 'fas fa-thermometer-three-quarters' },
            { name: 'Precipitation', key: 'precipProbability', icon: 'fas fa-umbrella' },
            { name: 'UV Index', key: 'uvIndex', icon: 'fas fa-sun' },
            { name: 'Humidity', key: 'humidity', icon: 'fas fa-tint' },
            {name: 'Sunrise', key: 'sunriseTime', icon: 'wi wi-sunrise'},
            { name: 'Sunset', key: 'sunsetTime', icon: 'wi wi-sunset' }
        ];
        let conditions = generateConditions(daily.data[0], conditionNames);
        return (
            <div className = "container">
                <Link className = "back-icon-link" to = "/">
                    <div className="back-icon">
                        <i className="fas fa-long-arrow-alt-left"></i>
                    </div>
                </Link>
                <div className="current-weather-wrapper">
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
                        conditions.map(condition => {
                            return (
                                <WeatherCondition key={condition.name} condition={condition} />
                            );
                        })
                    }
                </div>
                <TemperatureChart hourlyData = {hourly.data} />
            </div>
        );
    }
    else{
        return (<div className = "container">Loading ...</div>);
    }
}

export default TodayDetails;