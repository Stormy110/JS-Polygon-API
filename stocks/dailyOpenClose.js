const axios = require("axios")

const getDailyOpenClose = async (ticker, date) => {
    let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"
    let adjusted = 'true'
    let daily = await axios.get(`https://api.polygon.io/v1/open-close/${ticker}/${date}?adjusted=${adjusted}&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))

    console.log(daily)
    return daily
}

getDailyOpenClose("FUBO", "2021-12-07")

module.exports = {getDailyOpenClose}