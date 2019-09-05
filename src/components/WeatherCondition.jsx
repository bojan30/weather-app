import React from 'react';

const WeatherCondition = ({condition}) => {
    return (

        <div className="condition">
            <div className="condition-icon">
                <i className = {condition.icon}></i>
            </div>
            <div className="condition-desc">
                <div className="condition-desc-text">
                    {condition.name}
                </div>
                <div className="condition-desc-value">
                    {condition.value}
                </div>
            </div>
        </div>

    );
}

export default WeatherCondition;