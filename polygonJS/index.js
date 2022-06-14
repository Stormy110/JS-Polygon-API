
const restClient = require("@polygon.io/client-js")

const rest = restClient("AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl");

rest.stocks.aggregates(ticker="GE", multiplier=1, timespan="minute", from="2022-06-09", to="2022-06-09", limit=50000)
.then(data => console.log(data))
.catch(err => console.log(err))