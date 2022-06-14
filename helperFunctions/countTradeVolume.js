const axios = require("axios");

const countSize = async (ticker, from, to) => {
    let limit = "50000"
    let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    let trades = await axios.get(`https://api.polygon.io/v3/trades/${ticker}?timestamp.gte=${from}&timestamp.lte=${to}&order=asc&limit=${limit}&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err));

    let res = trades.results

    let s = 0

    for (let i = 0; i <= res.length - 1; i++){
        //console.log(res[i]['size'])
        s += res[i]['size']
    }
    if (trades.next_url != null){
        console.log(trades.next_url)
    }
    console.log("Volume = " + s + "\nNumber of Trades = " + res.length)
}

countSize("HOOK", "1645563600000000000", "1645563660000000000")


module.exports = {countSize}