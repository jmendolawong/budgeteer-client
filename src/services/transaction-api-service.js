import config from '../config';
import TokenService from '../services/token-service';

const TransactionApiService = {

  deleteTransaction(transactionId, callback) {

    fetch(`${config.API_ENDPOINT}/:accountId/transactions/${transactionId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res => {
        if (!res.ok) {
          res.json().then(error => Promise.reject(error))
        }
      })
      .then(() => {
        callback(transactionId)
      })
      .catch(error => {
        console.log(error)
      })
  },

  addTransaction(callback, category, date, cost, payee = '', memo = '') {
    fetch(`${config.API_ENDPOINT}/:accountId`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ category: category, date: date, cost: cost, payee: payee, memo: memo })
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => Promise.reject(err))
        } return res.json()
      })
      .then(data => {
        callback(data)
      })
  }

}

export default TransactionApiService
