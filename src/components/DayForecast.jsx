import React from 'react';
import generateIcon from '../helpers/generateIcon';

const DayForecast = ({day, index, history}) => {
    let id = index;
    let dateArr = new Date(day.time * 1000).toString().split(' ');
    return (
        <div onClick={() => { history.push(`/nextDaysDetails/${id + 1}`)}} className="day-forcast">
            <div className="day-forcast-date">
                <div className="day-forcast-day">
                    {dateArr[0]}
                </div>
                <div className="day-forcast-month">
                    {`${dateArr[1]} ${dateArr[2]}`}
                </div>
            </div>
            <div className="day-forcast-min-max-temp">
                {Math.round(day.temperatureMax)}°/{Math.round(day.temperatureMin)}°
            </div>
            <div className="day-forcast-icon" dangerouslySetInnerHTML={{ __html: generateIcon(day.icon) }}></div>
            <div className="humidity">
                <div className="humidity-icon">
                    <i className = "fas fa-tint"></i>
                </div>
                <div className="humidity-value">
                    {Math.round(day.humidity * 100)}%
                </div>
            </div>
        </div>
    );
}

export default DayForecast;