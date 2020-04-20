import config from '../config'
import TokenService from '../services/token-service'

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/authentication`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default AuthApiService;