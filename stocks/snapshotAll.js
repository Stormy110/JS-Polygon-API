const axios = require("axios");

const getSnapshotAll = async (tickers) => {
    let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    if (tickers === undefined){
        let snapshot = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
            
  
    

    let results = snapshot.tickers
    console.log(results)
    return results
    } else {
    let snapshot = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?tickers=${tickers}&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
            
  
    

    let results = snapshot.tickers
    console.log(results)
    return results
    }
    
}

getSnapshotAll("FUBO")

module.exports = {getSnapshotAll}
