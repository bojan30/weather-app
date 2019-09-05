const dateFormat = (timestamp) => {
    return new Date(timestamp * 1000).toString().split(' ');
}

export default dateFormat;
