module.exports = [
  { text: '首页', link: '/' },
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
    text: 'Redis的使用',
    link: '/RedisDoc/',
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