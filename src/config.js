export default {
  PORT: process.env.PORT || 8000,
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8000/api',
  TOKEN_KEY: 'budgeteer-client-auth-token'
}