const axios = require("axios")

const getGroupedDaily = async (date) => {
    let key = 'AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl'
    let adjusted = 'true'
    let bars = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${date}?adjusted=${adjusted}&apiKey=${key}`)
    .then(response => response.data)
    .catch(err => console.log(err))

    let res = bars['results']

    console.log(res)
    return res
}

getGroupedDaily("2021-12-07")

module.exports = {getGroupedDaily}