const axios = require("axios");

let getQuotes = async (ticker, date, limit) => {
    let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    let quotes = await axios.get(`https://api.polygon.io/vX/quotes/${ticker}?timestamp=${date}&limit=${limit}&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
    let results = quotes.results
    console.log(results)
   if ('next_url' in quotes){
        let next = quotes['next_url'] + `&apiKey=${key}`
        console.log(`Next URL = ` + next)
    } 
    return results
}
getQuotes("FUBO", "2021-12-10", "50")

module.exports = {getQuotes}
