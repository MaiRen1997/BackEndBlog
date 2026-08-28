module.exports = [
  { text: '首页', link: '/' },
  // {
  //   text: '前端',
  //   link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  //   items: [
  //     // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
  //     {
  //       text: 'javaScript笔记精选',
  //       items: [
  //         { text: 'JS常用案例', link: '/pages/03dd97/' },
  //       ],
  //     },
  //     {
  //       text: 'vue学习精选',
  //       items: [
  //         { text: '《vue基本知识点》', link: '/pages/0082e9/' },
  //         { text: '《vue3的使用》', link: '/pages/24e9bb/' }
  //       ],
  //     },
  //   ],
  // },
  {
    text: 'Python基础',
    link: '/python/'
  },
  {
    text: 'FastAPI',
    link: '/FastApi/',
    items: [
      {
        text: '业务逻辑封装', 
        items: [
          { text: 'VO的封装', link: '/pages/876b4c/' },
          { text: 'DO的封装', link: '/pages/c1fb0e/' },
          { text: 'dao的封装', link: '/pages/ba9a2e/' },
          { text: 'service的封装', link: '/pages/a1d52a/' },
          { text: 'controller的封装', link: '/pages/f21f2c/' },
        ],
      },
      {
        text: '常用业务封装', 
        items: [
          { text: 'minio的文件上传', link: '/pages/40e7b4/' },
          { text: 'excel的导入', link: '/pages/9c5c94/' },
          { text: '数据拉取', link: '/pages/4a0b7b/' },
          { text: '导出的实现', link: '/pages/0ced8e/' },
        ],
      }
    ]
  },
  {
    text: 'Mysql',
    link: '/Mysql/',
  },
  {
    text: '运维相关',
    link: '/MaintenanceDoc/',
  },
  {
    text: 'PySyllabus',
    link: '/PySyllabus/',
  }
];