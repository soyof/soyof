(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{550:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"github实现自动化部署个人博客"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github实现自动化部署个人博客"}},[s._v("#")]),s._v(" Github实现自动化部署个人博客")]),s._v(" "),t("blockquote",[t("p",[s._v("基于vuepress1.x，设置Github Actions，实现自动化部署")])]),s._v(" "),t("h3",{attrs:{id:"创建access-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建access-token"}},[s._v("#")]),s._v(" 创建ACCESS_TOKEN")]),s._v(" "),t("ul",[t("li",[s._v("点击头像 -> settings -> Developer Settings -> Personal access tokens -> Tokens (classic) -> Generate new token")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/githubActions/03.png",alt:"03.png"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/githubActions/02.png",alt:"02.png"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/githubActions/04.png",alt:"04.png"}})]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Token名称必须与项目中的一致 例如：ACCESS_TOKEN")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("勾选repo、delete_repo")])]),s._v(" "),t("li",[t("p",[s._v("截止日期（Expiration）选择 No expiration")])])])])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/githubActions/05.png",alt:"05.png"}})]),s._v(" "),t("ul",[t("li",[s._v("下拉至底部，保存（Generate token），保存后复制生成的TOKEN")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/githubActions/01.png",alt:"01.png"}})]),s._v(" "),t("h3",{attrs:{id:"项目中设置actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目中设置actions"}},[s._v("#")]),s._v(" 项目中设置Actions")]),s._v(" "),t("ul",[t("li",[s._v("进入项目 -> setting -> Secrets and variables -> Actions -> New repository")])]),s._v(" "),t("blockquote",[t("p",[s._v("将复制的TOKEN填入，保存")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/githubActions/06.png",alt:"06.png"}})]),s._v(" "),t("h3",{attrs:{id:"设置项目中的pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置项目中的pages"}},[s._v("#")]),s._v(" 设置项目中的pages")]),s._v(" "),t("ul",[t("li",[s._v("setting -> Build and deployment")])]),s._v(" "),t("blockquote",[t("p",[s._v("按照如下图所示，设置完成后，点击保存按钮")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/githubActions/07.png",alt:"07.png"}})]),s._v(" "),t("h3",{attrs:{id:"本地项目master分支根目录增加-github-workflows-xxx-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地项目master分支根目录增加-github-workflows-xxx-yml"}},[s._v("#")]),s._v(" 本地项目"),t("code",[s._v("master分支")]),s._v("根目录增加.github/workflows/xxx.yml")]),s._v(" "),t("blockquote",[t("p",[s._v("文件名称随意，以deploy.xml为例")])]),s._v(" "),t("p",[s._v("配置deploy.yml文件")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 流水线名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Build and \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 触发条件 push到master分支时触发")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"master"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workflow_dispatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("permissions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("contents")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" read\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" write\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("id-token")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" write\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("concurrency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("group")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pages"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cancel-in-progress")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作流作业")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-and-deploy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器配置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取代码")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v3\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Node.js with node_modules cache "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置nodejs版本和node_modules缓存")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" magnetikonline/action"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("modules"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cache@v1\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"16"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 下载依赖\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm install "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行npm install 下载依赖包")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 构建\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm run build "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行npm run build  构建发布包")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" github pages 部署\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" crazy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("max/ghaction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages@v3.1.0\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("GITHUB_TOKEN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.ACCESS_TOKEN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github生成的TOKEN  ACCESS_TOKEN为生成的TOKEN名称")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("domain")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" github.com "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，默认为github.com ")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("target_branch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要部署的分支 可选，默认为gh-pages")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keep_history")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建增量提交 可选，默认为false")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("allow_empty_commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许创建空分支 可选，默认为true")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build_dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要部署到gh-pages的文件 必填")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("committer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交人姓名和电子邮件地址 可选 name<address>")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("author")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx<xxx@gmail.com>'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作者姓名和电子邮件地址 可选 name<address>")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("commit_message")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'构建github pages'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交信息 可选")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("absolute_build_dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否将build_dir视为绝对路径，可选 默认为false")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("follow_symlinks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果启用，链接的内容将被复制 默认为false")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jekyll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许Jekyll建立网站 默认为true")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dry_run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果启用，则不会推送任何内容")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("verbose")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用详细输出")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br")])]),t("h3",{attrs:{id:"本地项目相关配置说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地项目相关配置说明"}},[s._v("#")]),s._v(" 本地项目相关配置说明")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("创建分支gh-pages，切换至gh-pages分支，删除所有文件后上传")])]),s._v(" "),t("li",[t("p",[s._v("切回至master分支，将.github及项目文件上传")])]),s._v(" "),t("li",[t("p",[s._v("回到github项目中，点击Actions，即可看见正在进行自动化部署")])])]),s._v(" "),t("h3",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.github.com/zh/actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);