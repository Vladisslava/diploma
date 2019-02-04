import moment from 'moment';

export function formatDate(time) {
    return moment(time).format('DD.MM.YYYY')
}

export function buildDataString(data) {
    let dataString = '';
    const keys = Object.keys(data);
    const keysCount = keys.length;

    keys.forEach((key, index) => {
        dataString += key + '=' + data[key];
        (index !== keysCount - 1) && (dataString += '&')
    });

    return dataString;
}