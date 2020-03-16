const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0d0651856d4ff97753f97a0b48da9b32/' + latitude + ',' + longitude + '?units=si&';

    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback(body.error, undefined);
        } else {
            const current = body.currently;
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + current.temperature + ' out. There is a ' + current.precipProbability + '% chance of rain.');
        }
    })
}

module.exports = forecast