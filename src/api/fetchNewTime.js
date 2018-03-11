const host = 'https://andthetimeis.com';

function fetchNewTime(timezone = 'est', str = 'now') {
  const url = host + '/' + timezone + '/' + str + '.json';
  return fetch(url)
    .then(res => res.json())
    .then(json => json.dateString);
}

export default fetchNewTime;
