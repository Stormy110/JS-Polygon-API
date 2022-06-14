const fetchSnapshot = async (ticker) => {
  fetch(
    `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/${ticker}?apiKey=AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl`
  )
    .then((response) => response.JSON())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

fetchSnapshot("AAPL");
