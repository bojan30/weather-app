const generateConditions = (inputObject, conditionsArray) => {
    let conditions = [];
    conditionsArray.forEach(condition => {
        //format of weather condition value!!!
        let value;
        if (condition.key.toLowerCase().indexOf('temperature') !== -1) {
            value = Math.round(inputObject[condition.key]) + '°C';
        }
        else if (condition.key.toLowerCase().indexOf('probability') !== -1 ||
            condition.key.toLowerCase().indexOf('humidity') !== -1) {
            value = inputObject[condition.key] * 100 + '%';
        }
        else {
            value = inputObject[condition.key];
        }
        conditions.push({
            name: condition.name,
            value: value,
            icon: condition.icon
        })
    })
    return conditions;
}

export default generateConditions;