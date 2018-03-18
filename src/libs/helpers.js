export function formatDate(time) {
    const date = new Date(time);
    const day = (date.getDay() + '').padStart(2, '0');
    const month = (date.getMonth() + '').padStart(2, '0');
    const year = (date.getFullYear() + '');

    return `${day}.${month}.${year}`
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