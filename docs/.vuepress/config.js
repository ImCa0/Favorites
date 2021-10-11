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
    logo: '/home.png',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '收藏夹',
        link: '/repository/',
      },
      {
        text: 'Blog',
        link: 'https://www.imcao.cn',
      },
    ],
    sidebar: ['/repository/'],
    lastUpdated: '上次更新',
    repo: 'ImCa0/Favorites',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public',
      },
    },
  },
}
