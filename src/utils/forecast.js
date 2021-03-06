
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f67fe3970ee2dd806d8d92fe4302e696&query='+latitude+',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.current.weather_descriptions)
            callback(undefined, {temp:body.current.temperature, feelslike:body.current.feelslike, desc:body.current.weather_descriptions[0]})
        }
    })
}

module.exports = forecast