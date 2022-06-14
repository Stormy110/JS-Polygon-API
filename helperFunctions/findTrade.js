const axios = require("axios");

const findTrade = async (ticker, from, to) => {
    key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    let trades = await axios.get(`https://api.polygon.io/vX/trades/${ticker}?order=asc&limit=50000&timestamp.gte=${from}&timestamp.lte=${to}&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err));
    
    console.log(trades.results)
    console.log(trades.results.length)
    return trades
}

findTrade("CZR", "2018-08-03", "2018-08-03")

module.exports = {findTrade}