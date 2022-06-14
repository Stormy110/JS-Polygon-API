const axios = require("axios")

const getTopGainers = async () => {
    let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    let allTickers = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
    let tickers = allTickers.tickers
    let gainers = []
    let gainNames = []
    for (let i = 0; i <= tickers.length - 1; i ++){
        if (tickers[i].todaysChangePerc >= 10 && tickers[i].lastTrade['p'] > 30){
            gainers.push(...[tickers[i]])
            
        }
    }
    gainers.map(i => gainNames.push(...[i['ticker']]))
    // let index = gainNames.indexOf('CEG')
    // gainNames.splice(index,1)
    // let results = []

    // // Get ticker details for each gainer
    // for (let i = 0; i <= gainNames.length - 1; i++){
    //     let details = await axios.get(`https://api.polygon.io/v3/reference/tickers/${gainNames[i]}?apiKey=${key}`)
    //         .then(response => response.data)
    //         .catch(err => console.log(err))
    //      if(!details){
    //         continue
    //      } else {
    //         results.push(...[details.results])
    //      }  
         
    // }
    console.log(gainers)
    console.log(gainers.length)
}

getTopGainers()

module.exports = {getTopGainers}