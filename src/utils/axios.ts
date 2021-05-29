import Axios from 'axios'
import { Dialog } from 'vant'

const baseURL = 'dashboard-api'

const axios = Axios.create({
  baseURL,
  timeout: 20000, // 请求超时 20s
  // url:"/api/tools/zimi",
  data:{
    // "question":"***"
  },
})
function getCookie(name:any){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
  return unescape(arr[2]);
  else
  return null;
}
// axios.interceptors.request.use(reqSuccess, reqError);
// axios.interceptors.response.use(resSuccess, resError);
// function reqSuccess(config:any) {
//   if (!config.noLoading) {
//     // store.commit('SET_LOADING_SHOW');
//   }
//   config.headers[ 'If-Modified-Since' ] = [ '0' ];// IEget缓存解决
//   const token = sessionStorage.getItem('dashboard-token') || '';
//   // 为了解决第一次进来报登录超时的问题
//   if (!token && config.url !== '/login') {
//     return;
//   }
//   config.headers.token = token;

//   return config;
// }

// function reqError(error:any) {
//   console.log(error, 'reqError')
//   return Promise.reject(error);
// }

// function resSuccess(response:any) {
//   console.log(response,'resSuccess');
//   if (!response.config.noLoading) {
//     // store.dispatch('SET_LOADING_HIDE');
//   }
//   const token = response.headers.token;
//   if (token) {
//     sessionStorage[ 'dashboard-token' ] = token;
//   }
//   return response;
// }
// headers:{
//   'x-csrf-token': getCookie("csrfToken"), // 前后端不分离的情况加每次打开客户端，egg会直接在客户端的 Cookie 中写入密钥 ，密钥的 Key 就是 'scrfToken' 这个字段，所以直接获取就好了
// },
// function resError(error:any) {
//   console.log(error,'resError');

//   // store.dispatch('SET_LOADING_HIDE');
//   if (error.response.status === 401) {
//     // router.push({
//     //   path: '/login',
//     //   query: {
//     //     reason: 'expired',
//     //   },
//     // });
//   } else if (error.response.status === 503) {
//     // router.push({
//     //   path: '/page503',
//     // });
//     Dialog({ message: 'error' })
//   } else if (String(error.response.status)[ 0 ] === '5') {
//     Dialog({ message: 'error' })
//   }
//   return Promise.reject(error);
// }

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (response) => {
    // response.headers['x-csrf-token'] = sessionStorage.getItem('dashboard-token') || 'qweasdzxc';
    response.headers['x-csrf-token'] = getCookie("csrfToken");
    return response
  },
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
  (error) => Promise.reject(error)
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    console.log(response,'1111111');
    return response
  },
    /**
     * 这里对 response 和 error 不做任何处理，直接返回
     */
  (error) => {
    console.log(error,'1111111');
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      //   ElMessage.error(`Code: ${code}, Message: ${msg}`);
      Dialog({ message: `${code}` })
      Dialog({ message: `${msg}` })
    } else {
      //   ElMessage.error(`${error}`);
      Dialog({ message: 'error' })
    }
    return Promise.reject(error)
  }
)
export default axios
