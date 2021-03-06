/*
 * @version: 1.0
 * @Author: East Wind
 * @Description: 添加了Element ui引入的要求
 * @Date: 2021-02-28 21:49:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-04 16:52:02
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          // 由于 customStyleName 在配置中被声明的原因，`style: true` 会被直接忽略掉，
          // 如果你需要使用 scss 源文件，把文件结尾的扩展名从 `.css` 替换成 `.scss` 就可以了
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
  ]
}
