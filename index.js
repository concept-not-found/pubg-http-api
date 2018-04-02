const Axios = require('axios')

module.exports = (apiKey, region) => {
  const validRegions = [
    'xbox-as',
    'xbox-eu',
    'xbox-na',
    'xbox-oc',
    'pc-krjp',
    'pc-na',
    'pc-eu',
    'pc-oc',
    'pc-kakao',
    'pc-sea',
    'pc-sa',
    'pc-as'
  ]

  if (!validRegions.includes(region)) {
    throw new Error(`region must be one of [${validRegions.join(', ')}] but got ${region}`)
  }
  const http = Axios.create({
    baseURL: `https://api.playbattlegrounds.com/shards/${region}`,
    headers: {
      authorization: `Bearer ${apiKey}`,
      accept: 'application/vnd.api+json',
      'accept-encoding': 'gzip'
    }
  })

  return {
    get (endpoint, filters = {}) {
      const params = {}
      Object.keys(filters).forEach((filterName) => {
        const filterValues = filters[filterName]
        if (!(filterValues instanceof Array)) {
          throw new Error(`filter vlaue must be an array but got ${filterValues}`)
        }
        params[`filter[${filterName}]`] = filterValues.join(',')
      })
      return http.get(endpoint, {
        params
      })
    }
  }
}
