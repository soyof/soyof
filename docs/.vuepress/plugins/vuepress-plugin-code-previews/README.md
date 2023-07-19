# vuepress-plugin-code-previews

> vuepress中实现示例预览、源码查看、复制
> 代码高亮插件：[prismjs](https://prismjs.com/examples.html)

### 使用说明

> npm i vuepress-plugin-code-previews --save-dev

- docs/config.js 配置

  ```javascript
  plugins: [
      [
          'code-preview', 
          { 
              copyTips: 'copied', // 复制成功提示信息
              tipsTimes: 1000 // 提示框消失时间 单位：ms
      	}
      ],
  ]
  ```

  

- 在.md文件中按下列方式编写

```markdown
// 只显示组件预览
::: code-preview xxx.vue --isOnlyShowComp --title:这是一个示例
:::

// 只显示源码
::: code-preview xxx.vue --isOnlyShowCode
:::

// 预览及源码均显示
::: code-preview xxx.vue
:::
```



### 配置参数

|        参数        |    说明     |  默认值  |
|:----------------:|:---------:|:-----:|
| --isOnlyShowComp | 仅显示组件预览功能 | false |
| --isOnlyShowCode |  仅显示源码功能  | false |
|   --title:xxx    |   设置标题    |   -   |



### 参考

[markdown-it](https://github.com/markdown-it/markdown-it)

[markdown-it-container](https://github.com/hackmdio/markdown-it-container)

[vuepress](http://www.fenovice.com/doc/vuepress-next/advanced/plugin.html)