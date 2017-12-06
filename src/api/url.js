const url = {
  getCityWeather: '/app/weather/listWeather'
}

const prefix = '/api'

for (let key in url) {
  url[key] = `${prefix}${url[key]}`
}

export default url
