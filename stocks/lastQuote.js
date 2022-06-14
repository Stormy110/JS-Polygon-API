const axios = require("axios");

const getLastQuote = async (ticker) => {
    let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    let quote = await axios.get(`https://api.polygon.io/v2/last/nbbo/${ticker}?apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
    
    let result = quote.results
    console.log(result)
    return result
}

getLastQuote("FUBO")

module.exports = {getLastQuote}