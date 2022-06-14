const axios = require("axios")

const getSnapshotGainLoss = async (direction) => {
    let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    if (direction === "gainers"){
        let snapshot = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=${key}`)
            .then(response => response.data)
            .catch(err => console.log(err))
        let results = snapshot.tickers
        console.log(results)
        return results
    } else {
        let snapshot = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/losers?apiKey=${key}`)
            .then(response => response.data)
            .catch(err => console.log(err))
        let results = snapshot.tickers
        console.log(results)
        return results
    }
}

getSnapshotGainLoss("gainers")

module.exports = {getSnapshotGainLoss}