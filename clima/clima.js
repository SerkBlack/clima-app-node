const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat}&lon=${lng}&appid=cc36721becd77621e0b0344ccfda1da2&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}