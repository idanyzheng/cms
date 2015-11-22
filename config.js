/**
 * config
 */

var path = require('path');

var config = {
  debug: true,
  name: 'F', // 网站名字
  description: 'F is a cms', // 网站的描述
  keywords: 'cms, node, express, connect, socket.io',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="" />'
  ],
  site_logo: '/public/images/site_logo.png', // default is `name`
  site_icon: '/public/images/_icon.png', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    [ '/about', '关于' ]
  ],

  // mongodb 配置
  db: 'mongodb://127.0.0.1/node_club_dev',

  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,



  // 程序运行的端口
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS配置
  rss: {
    title: '',
    link: '',
    language: 'zh-cn',
    description: '',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;
