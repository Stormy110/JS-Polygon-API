const axios = require("axios");

const getTickers = async (market) => {
    let key = 'AmoWhQ0QMhyojvOpjnZ6G7Beyk6PcJAl'
    let tickerList = await axios.get(`https://api.polygon.io/v3/reference/tickers?market=${market}&active=true&sort=ticker&order=asc&limit=1000&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
 
    let fullList = []
    fullList.push(...[tickerList.results])

    if ('next_url' in tickerList){
        let next = tickerList['next_url'] 
        
        let nextList = await axios.get(`${next}&apiKey=${key}`)
            .then(response => response.data)
            .catch(err => console.log(err))
        fullList.push(...[nextList.results])
        
        if ('next_url' in nextList){
            let next1 = nextList['next_url']

            let nextList1 = await axios.get(`${next1}&apiKey=${key}`)
                .then(response => response.data)
                .catch(err => console.log(err))
            
            fullList.push(...[nextList1.results])
            

            if ('next_url' in nextList1){
                let next2 = nextList1['next_url']
    
                let nextList2 = await axios.get(`${next2}&apiKey=${key}`)
                    .then(response => response.data)
                    .catch(err => console.log(err))
                
                fullList.push(...[nextList2.results])
               

                if ('next_url' in nextList2){
                    let next3 = nextList2['next_url']
        
                    let nextList3 = await axios.get(`${next3}&apiKey=${key}`)
                        .then(response => response.data)
                        .catch(err => console.log(err))
                    
                    fullList.push(...[nextList3.results])
                    
                    if ('next_url' in nextList3){
                        let next4 = nextList3['next_url']
            
                        let nextList4 = await axios.get(`${next4}&apiKey=${key}`)
                            .then(response => response.data)
                            .catch(err => console.log(err))
                        
                        fullList.push(...[nextList4.results])
                        
                        if ('next_url' in nextList4){
                            let next5 = nextList4['next_url']
                
                            let nextList5 = await axios.get(`${next5}&apiKey=${key}`)
                                .then(response => response.data)
                                .catch(err => console.log(err))
                            
                            fullList.push(...[nextList5.results])
                            
                            if ('next_url' in nextList5){
                                let next6 = nextList5['next_url']
                    
                                let nextList6 = await axios.get(`${next6}&apiKey=${key}`)
                                    .then(response => response.data)
                                    .catch(err => console.log(err))
                                
                                fullList.push(...[nextList6.results])
                                
                                if ('next_url' in nextList6){
                                    let next7 = nextList6['next_url']
                        
                                    let nextList7 = await axios.get(`${next7}&apiKey=${key}`)
                                        .then(response => response.data)
                                        .catch(err => console.log(err))
                                    
                                    fullList.push(...[nextList7.results])
                                    

                                    if ('next_url' in nextList7){
                                        let next8 = nextList7['next_url']
                            
                                        let nextList8 = await axios.get(`${next8}&apiKey=${key}`)
                                            .then(response => response.data)
                                            .catch(err => console.log(err))
                                        
                                        fullList.push(...[nextList8.results])
                                        
                                        if ('next_url' in nextList8){
                                            let next9 = nextList8['next_url']
                                
                                            let nextList9 = await axios.get(`${next9}&apiKey=${key}`)
                                                .then(response => response.data)
                                                .catch(err => console.log(err))
                                            
                                            fullList.push(...[nextList9.results])
                                            
                                            if ('next_url' in nextList9){
                                                let next10 = nextList9['next_url']
                                    
                                                let nextList10 = await axios.get(`${next10}&apiKey=${key}`)
                                                    .then(response => response.data)
                                                    .catch(err => console.log(err))
                                                
                                                fullList.push(...[nextList10.results])
                                                
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
    }
// fullList contains all Tickers in an array of 12 arrays
let allTickers = [...fullList[0], ...fullList[1], ...fullList[2], ...fullList[3], ...fullList[4], ...fullList[5], ...fullList[6], ...fullList[7], ...fullList[8], ...fullList[9], ...fullList[10], ...fullList[11]]
// console.log(allTickers)

let specialTickers = allTickers.filter(i => i.ticker.includes(".") || i.ticker.includes("p"))

console.log(specialTickers.length)

}

getTickers('stocks')

module.exports = {getTickers}