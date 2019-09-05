import React from 'react';
import {Line} from 'react-chartjs-2';
import {defaults} from 'chart.js';

const TemperatureChart = ({hourlyData}) => {
    defaults.global.defaultFontColor = '#fff';
    let xAxis = hourlyData.slice(0,11).map(h=>{
        return new Date(h.time * 1000).toString().split(' ')[4].split(':')[0];
    })
    let temp = hourlyData.slice(0,11).map(h => {
        return h.temperature;
    })
    let data = {
        labels: xAxis,
        datasets: [{
            data: temp,
            borderWidth: 0,
            pointRadius: 2,
            backgroundColor: 'transparent',
            pointBackgroundColor: '#fff',
            borderColor: '#fff'
        },
    ],
    }
    let options = {
        responsive: true,
        title: {
            display: true,
            text: 'Temperature for the next 12 hours'
        },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    display: false
                },
                scaleLabel: {
                    display: true,
                    labelString: 'h'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: false
                },
                scaleLabel: {
                    display: true,
                    labelString: '°C'
                }
            }],
        }
    }
    return (
        <div style = {{position: 'relative', width: '100%'} }>
            <Line data = {data} options = {options} width = {400} height = {200} />
        </div>
    );
}

export default TemperatureChart;