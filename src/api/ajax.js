 import axios from 'axios'

 let instance =  ''
 //拦截器
 function createInterceptors(){
   // 发送的
   instance.interceptors.request.use( config => config,err => {

        return Promise.reject(err)
   })

   // 返回的
   instance.interceptors.response.use(response => response, err => {

       return Promise.reject(err)
   })
 }
 // 创建实例
 function createInstance(){
   instance = axios.create({

   })
   createInterceptors()
 }

 export default ajax(url,method='get',params={},data={}){
   return new Promise((resolve,reject) => {
              instance.request({
                url,
                method,
                params,
                data
              })
              .then(data => resolve(data))
              .catch(err => reject(err))
   })
 }