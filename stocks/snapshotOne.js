const axios = require("axios")

const getSnapshotOne = async (ticker) => {
    let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    let snapshot = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/${ticker}?apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
    let result = snapshot.ticker
    console.log(result)
    return result
}

getSnapshotOne("GME")

module.exports = {getSnapshotOne}