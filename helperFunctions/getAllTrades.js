const axios = require("axios");
const mergeWith = require('lodash.mergewith');

function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
}

let key = "AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl"


const getTrades = async (url, data) => {
    data = data || {}
 
    await axios.get(url)
        .then(response => {
            _.mergeWith(data, response.data, customizer)
            if (response.data['next_url'] != null){
                console.log(response.data.next_url)
                url = response.data.next_url + '&apiKey=' + key
              return getTrades(url, data)
            }
        })
        .catch(err => console.log(err));
    
    console.log(data)
    return data
}

getTrades(`https://api.polygon.io/vX/trades/BKKT?timestamp.gte=2022-02-01&timestamp.lte=2022-02-16&limit=50000&apiKey=${key}`)