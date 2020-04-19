import config from '../config'

const TransactionApiService = {
  getTransactions() {
    return fetch(`${config.API_ENDPOINT}/:accountId`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,

      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => Promise.reject(err))
        } return res.json()
      })
      .then(transactions => {
        window.sessionStorage.setItem('sessionTransactions', JSON.stringify(transactions))
        this.setState({ transactions })
      })
      .catch(error => {
        console.log({ error })
      })
  }
}

export default TransactionApiService
