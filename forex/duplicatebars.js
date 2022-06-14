const axios = require("axios");

const getTrades = async (ticker) => {
    let key = 'AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl'
    let dupes = await axios.get(`https://api.polygon.io/v2/aggs/ticker/C:${ticker}/range/1/minute/2022-03-11/2022-03-11?adjusted=true&sort=desc&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
    
    let results = dupes.results
    console.log(results.length)
    if (new Set(results) !== results.length){
        console.log("has duplicates")
    } else {
        console.log("no dupes")
    }
    
} 

getTrades("EURUSD")