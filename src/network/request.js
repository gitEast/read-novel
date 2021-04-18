/*
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-24 19:24:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-08 21:55:35
 */
import axios from 'axios'

export function post(url, config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:9090',
    timeout: 5000,
    responseType: 'json'
  })

  // 2.axios拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  // 3.发送网络请求
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return instance.post(url, config, headers)
}
