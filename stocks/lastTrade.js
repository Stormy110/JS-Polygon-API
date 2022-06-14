const axios = require("axios");

const lastTrade = async (ticker) => {
    let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    let trade = await axios.get(`https://api.polygon.io/v2/last/trade/${ticker}?apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
    let results = trade.results
    console.log(results)
    return results
}
lastTrade("FUBO")

module.exports = {lastTrade}