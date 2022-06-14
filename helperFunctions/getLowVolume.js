const axios = require("axios");

const getVolume = async () => {
    let key = 'AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl'
    let groupDaily = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2022-03-24?adjusted=true&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
    
    let results = groupDaily.results
    let lowVolume = []
    for (let i = 0; i <= results.length -1; i++){
        if (results[i]['n'] < 5){
            lowVolume.push(results[i])
        }
    }
    console.log(lowVolume)
    
} 

getVolume()