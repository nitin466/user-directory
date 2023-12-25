function twoDigitFormat(str) {
    return ("0" + str).slice(-2);
}

export const convertToClientTimezone = (date, location) => {

    return date.toLocaleString('en-US', { timeZone: location})
}
export const getFomattedTime = (timeUTC) => {
    const date = new Date(timeUTC);
    const HH = twoDigitFormat(date.getHours());
    const MM = twoDigitFormat(date.getMinutes());
    const SS = twoDigitFormat(date.getSeconds());

    return `${HH} : ${MM} : ${SS}`
}
