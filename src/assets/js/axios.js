import axios from 'axios'

axios.defaults.timeout = 9999999
// axios.defaults.baseURL ='/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
/**
 * 设置post请求是的header信息
 */

/**
 * //http request 拦截器
 */
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem('Token')
    if (token) {
      config.headers = {
        'Authorization': token
      }
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    if (response.data.code === 500) {
      localStorage.removeItem('Token')
      // eslint-disable-next-line no-undef
      router.push({
        path: '/login'
      })
    }
    return response
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, params = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
      headers: headers
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export function del (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
