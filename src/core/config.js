const API_BASE_URL = process.env.NODE_ENV === "development" ? 'http://localhost:4000/api' : process.env.REACT_APP_API_BASE_URL ?  process.env.REACT_APP_API_BASE_URL : `${window.origin}/api`
// const API_BASE_URL = `${window.origin}/api`
console.log(process.env);

export default {
    API_BASE_URL
}
