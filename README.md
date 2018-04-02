# pubg-http-api
An [axios](https://github.com/axios/axios) HTTP client for [PUBG API](https://developer.playbattlegrounds.com).

This library does not handle rate limiting! You need to provide your own rate limiting solution using the returned headers. See https://documentation.playbattlegrounds.com/en/api-keys.html#rate-limits

## Example
```js
const PubgHttpApi = require('pubg-http-api');

const pubgHttpClient = PubgHttpApi(process.env.PUBG_API_KEY, 'pc-na');

pubgHttpClient.get('players', {
  playerNames: ['shroud', 'break']
})
  .then((response) => {
    // response is an axios response
  });

pubgHttpClient.get('matches/a646eaee-36cd-11e8-b467-0ed5f89f718b')
  .then((response) => {
    // response is an axios response
  });
```

## Usage
### **`PubgHttpApi`([apiKey](https://documentation.playbattlegrounds.com/en/api-keys.html), [region](https://documentation.playbattlegrounds.com/en/making-requests.html#regions))** creates PUBG HTTP client

### **`pubgHttpClient.get`(endpoint, filters?)** calls gets on endpoint with optional filters, where filters is an object with filter names to array of filter values
For all available endpoints and the contents of responses, see https://documentation.playbattlegrounds.com/en/introduction.html
