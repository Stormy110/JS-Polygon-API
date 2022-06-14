const axios = require("axios")

const getTrades = async (ticker, date, limit) => {
    let key = "***"
    let trades = await axios.get(`https://api.polygon.io/vX/trades/${ticker}?timestamp=${date}&limit=${limit}&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err));


    let res = trades.results
    console.log(res)
    if ('next_url' in trades){
        let next = trades['next_url'] + `&apiKey=${key}`
        console.log("next url = " + next)
    }
    
    return res
}

getTrades("FUBO", "2021-12-08", "50")

module.exports = {getTrades}