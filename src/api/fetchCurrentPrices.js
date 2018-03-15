const host = 'https://min-api.cryptocompare.com/data/pricemulti';

function fetchCurrentPrices(fsyms = 'BTC,ETH,LTC', tsyms = 'USD') {
  const url = host + '?fsyms=' + fsyms + '&tsyms=' + tsyms;
  return fetch(url).then(res => res.json());
}

export default fetchCurrentPrices;
