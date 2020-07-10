import { Cookies } from "middleware";

const API_ENDPOINT = process.env.REACT_APP_API_URL || '';

const API_ROUTES = {
  // Home
  HOME: API_ENDPOINT + '/api/v1/home',

  // Auth
  LOGIN: API_ENDPOINT + '/api/v1/auth/login',

  // User

  // Portofolio
  PORTOFOLIO: API_ENDPOINT + '/api/v1/portofolio',

  // Blog
  BLOG: API_ENDPOINT + '/api/v1/blog',

  // Email
  SEND_MAIL: API_ENDPOINT + '/api/v1/sendemail'
}

const REGEX = {
  // EMAIL : /^\S+@\S+\.\S+$/
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
  SIXCHAR: /.{6,20}/,
  NUMBER: /\d/,
  LOWERCASE: /[a-z]/,
  UPPERCASE: /[A-Z]/
}

const LOCALNAME = {
  TOKEN : 'TOKEN',
  APICONST : 'APICONST'
}

const CONFIG_AXIOS = {
  NOAUTH: {
    headers: {
      'Content-Type': 'application/json',
    }
  },
  WITHAUTH: {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get(LOCALNAME.TOKEN)}`
    }
  }
}
export {
  API_ENDPOINT,
  API_ROUTES,
  REGEX,
  LOCALNAME,
  CONFIG_AXIOS
}