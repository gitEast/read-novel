/*
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-28 22:36:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-11 02:32:30
 */
module.exports = {
  configureWebpack: {
    resolve: {
      // 配置文件夹别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
