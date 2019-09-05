function generateIcon(icon) {
    let theIcon;
    switch (icon) {
        case 'clear-day':
            theIcon = '<i class = "wi wi-day-sunny"></i>';
            return theIcon;
        case 'clear-night':
            theIcon = '<i class = "wi wi-night-clear"></i>';
            return theIcon;
        case 'rain':
            theIcon = '<i class="wi wi-rain"></i>';
            return theIcon;
        case 'snow':
            theIcon = '<i class="wi wi-snow"></i>';
            return theIcon;
        case 'sleet':
            theIcon = '<i class="wi wi-sleet"></i>';
            return theIcon;
        case 'wind':
            theIcon = '<i class="wi wi-windy"></i>';
            return theIcon;
        case 'fog':
            theIcon = '<i class="wi wi-fogg"></i>';
            return theIcon;
        case 'cloudy':
            theIcon = '<i class="wi wi-cloudy"></i>';
            return theIcon;
        case 'partly-cloudy-day':
            theIcon = '<i class="wi wi-day-cloudy"></i>';
            return theIcon;
        case 'partly-cloudy-night':
            theIcon = '<i class="wi wi-night-partly-cloudy"></i>';
            return theIcon;
        default : return;
    }
}

export default generateIcon;