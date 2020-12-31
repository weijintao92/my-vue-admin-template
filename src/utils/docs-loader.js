
// 通过 vue-loader 自定义块 功能，获取目标文件的文件路径，然后通过 fs 读取源码，
// 再用 @vue/compiler-core 的 API baseParse将读取到的内容转换成 AST 语法抽象树，
// 然后将 fs 读取的内容中 抽离出 自定义块内容 和 需要的源码，
// 最后再将以上两个内容重新挂到组件对象上，直接读取组件相应的字段就可以。
// const fs = require('fs')
// 参考博客：https://blog.csdn.net/qq_40411946/article/details/111027534
// Vue Loader官方说明：https://vue-loader.vuejs.org/zh/guide/custom-blocks.html
const { baseParse } = require('@vue/compiler-core')

module.exports = function(source, map) {
  // 1. 获取带有 <docs /> 标签的文件完整路径
  const { resourcePath } = this
  // 2. 读取文件内容
  const file = fs.readFileSync(resourcePath).toString()
  // 3. 通过 baseParse 将字符串模板转换成 AST 抽象语法树
  const parsed = baseParse(file).children.find(n => n.tag === 'docs')
  // 4. 标题
  const title = parsed.children[0].content
  // 5. 将 <docs></docs> 标签和内容抽离
  const main = file.split(parsed.loc.source).join('').trim()
  // 6. 回到并添加到 组件对象上面
  this.callback(
    null,
    `export default function (Component) {
          Component.options.__sourceCode = ${JSON.stringify(main)}
          Component.options.__sourceCodeTitle = ${JSON.stringify(title)}
        }`,
    map
  )
}

