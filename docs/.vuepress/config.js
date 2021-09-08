const utils = require('./utils')

module.exports = {
  title: 'Favorites',
  description: '个人收藏夹',
  base: '/favorites/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    logo: 'home.png',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '库',
        link: '/repository/',
      },
      /*
      {
        text: '网站',
        link: '/website/'
      },
      {
        text: '最近阅读',
        link: '/diary/read'
      },
      {
        text: '文章',
        link: '/article/'
      },
      // { text: '工具', link: 'https://google.com' },
      {
        text: '面试',
        link: '/interview/'
      },
      {
        text: '内推',
        link: '/job/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      }
*/
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'ImCa0/Favorites',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public',
      },
    },
  },
}
