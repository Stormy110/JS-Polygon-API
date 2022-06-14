const axios = require("axios");

const prevClose = async (ticker) => {
    let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    let adjusted = "true"
    let candle = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=${adjusted}&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
    let results = candle.results
    console.log(results)
    return results
}

prevClose("F")

module.exports = {prevClose}