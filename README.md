I built this cryptocurrency portfolio to experiment with using the [Redux](https://redux.js.org/) state management library. The app uses the [redux-persist](https://github.com/rt2zz/redux-persist) library to locally store your portfolio in localstorage in your browser.

This app uses the free API from [CryptoCompare](https://min-api.cryptocompare.com/) for live price data.

I can't guarantee the accuracy of all values and calculations in this app. If you find any bugs, feel free to contact me at joel@joelbentley.com or add an [issue on Github](https://github.com/joel-bentley/cryptocoin-portfolio/issues).

To maybe add in the future:

* Use the [reselect](https://github.com/reactjs/reselect) library to memoize redux selectors in order to only have the rows that were updated recalculated from state
* Add charts and visualizations (react-highcharts or similar)
* Add ability to sort rows by any columns
* Add ability to add orders and display amounts in different currencies
