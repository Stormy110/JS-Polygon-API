const axios = require("axios")

const getAggs = async (ticker)=> {
    let key = '***'
    let from = '2021-10-10'
    let to = '2022-01-20'
    let multiplier = '1'
    let timespan = "day"
    let limit = '50000'
    let adjusted = 'true'
    let sort = 'asc'
    let aggs = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}?adjusted=${adjusted}&sort=${sort}&limit=${limit}&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err));

    res = aggs.results
    console.log(res)
    return res


}

getAggs("PTON")


module.exports = {getAggs}