const axios = require("axios");

const getOptionsTrades = async (contract, from, to) => {
    let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    let trades = await axios.get(`https://api.polygon.io/vX/trades/${contract}?order=asc&limit=50000&&timestamp.gte=${from}&timestamp.lte=${to}&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))

    let results = trades.results
    console.log(results)
    if('next_url' in trades){
        let next = trades['next_url']
        console.log(next)
    } else {
        // get the volume and number of trades
        let s = 0
        for (let i = 0; i <= results.length - 1; i++){
        //console.log(res[i]['size'])
        s += results[i]['size']
        
    }
    console.log("Volume = " + s + "\nNumber of Trades = " + results.length)
    }
    return results
}






getOptionsTrades("O:AAPL220211C00105000", "1641027600000000000", "1644253200000000000")