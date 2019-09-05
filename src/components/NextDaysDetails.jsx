import React from 'react';
import generateIcon from '../helpers/generateIcon';
import {Redirect, Link} from 'react-router-dom';
const NextDaysDetails = ({daily,match}) => {
    if(daily){
        let dayID = Number(match.params.id);
        let dayForecastData = daily.data[dayID];
        let date = new Date(dayForecastData.time * 1000).toString().split(' ');
        return (
            <div className="container">
                <Link className="back-icon-link" to="/">
                    <div className="back-icon">
                        <i className="fas fa-long-arrow-alt-left"></i>
                    </div>
                </Link>
                <div className="current-weather-wrapper">
                    <div className="current-date">
                        {`${date[0]}, ${date[1]} ${date[2]}`}
                    </div>
                    <div className="basic-weather">
                        <div className="weather-icon" dangerouslySetInnerHTML={{ __html: generateIcon(dayForecastData.icon) }}></div>
                        <div className="min-max-temperature">
                            <div className="max">
                                {Math.round(dayForecastData.temperatureMax) + '°C'}
                            </div>
                            <div className="min">
                                {Math.round(dayForecastData.temperatureMin) + '°C'}
                            </div>
                        </div>
                    </div>
                    <div className="weather-summary">
                        {dayForecastData.summary}
                    </div>
                </div>
                <div className="weather-conditions-wrapper">
                    <div className="condition">
                        <div className="condition-icon">
                            <i className="fas fa-umbrella"></i>
                        </div>
                        <div className="condition-desc">
                            <div className="condition-desc-text">
                                Precipitation
                                </div>
                            <div id="precip-value" className="condition-desc-value">
                                {dayForecastData.precipProbability * 100 + '%'}
                            </div>
                        </div>
                    </div>
                    <div className="condition">
                        <div className="condition-icon">
                            <i className="fas fa-sun"></i>
                        </div>
                        <div className="condition-desc">
                            <div className="condition-desc-text">
                                UV Index
                                </div>
                            <div id="uv-value" className="condition-desc-value">
                                {dayForecastData.uvIndex}
                            </div>
                        </div>
                    </div>
                    <div className="condition">
                        <div className="condition-icon">
                            <i className="fas fa-tint"></i>
                        </div>
                        <div className="condition-desc">
                            <div className="condition-desc-text">
                                Humidity
                                </div>
                            <div id="humid-value" className="condition-desc-value">
                                {dayForecastData.humidity * 100 + '%'}
                            </div>
                        </div>
                    </div>
                    <div className="condition">
                        <div className="condition-icon">
                            <i className="wi wi-sunrise"></i>
                        </div>
                        <div className="condition-desc">
                            <div className="condition-desc-text">
                                Sunrise
                                </div>
                            <div id="humid-value" className="condition-desc-value">
                                {new Date(dayForecastData.sunriseTime * 1000).toString().split(' ')[4]}
                            </div>
                        </div>
                    </div>
                    <div className="condition">
                        <div className="condition-icon">
                            <i className="wi wi-sunset"></i>
                        </div>
                        <div className="condition-desc">
                            <div className="condition-desc-text">
                                Sunset
                                </div>
                            <div id="humid-value" className="condition-desc-value">
                                {new Date(dayForecastData.sunsetTime * 1000).toString().split(' ')[4]}
                            </div>
                        </div>
                    </div>
                    <div className="condition">
                        <div className="condition-icon">
                            <i className="fas fa-wind"></i>
                        </div>
                        <div className="condition-desc">
                            <div className="condition-desc-text">
                                Wind
                        </div>
                            <div className="condition-desc-value">
                                {dayForecastData.windSpeed} m/s
                                </div>
                        </div>
                    </div>
                    <div className="condition">
                        <div className="condition-icon">
                            <i className="fas fa-eye"></i>
                        </div>
                        <div className="condition-desc">
                            <div className="condition-desc-text">
                                Visibility
                        </div>
                            <div className="condition-desc-value">
                                {dayForecastData.visibility} km
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <Redirect to = "/" />
        );
    }
}

export default NextDaysDetails;