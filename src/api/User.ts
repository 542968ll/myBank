import request from './Request'

// 获取用户信息
export const getUserInfo = () => {
  const token = localStorage.getItem('token');
  if (!token) return Promise.reject(new Error('用户未登录'));
  return request.get('/api/user/info');
}


// 登录
export const userLogin = (params: any) => {
  return request.post('/api/user/login', params).then((res: any)=> {
    if(res.code === 200) {
      localStorage.setItem('token', res.data.token)
    }
    return Promise.resolve(res)
  })
}








