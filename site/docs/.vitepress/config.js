export default {
  title: 'mydesignvue',
  base: process.env.NODE_ENV === 'production' ? '/mydesignvue/' : '/',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guild/introduce' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '介绍',
              link: '/guild/introduce'
            },
            {
              text: '快速开始',
              link: '/guild/quickstart'
            },
            {
              text: '开发组件',
              link: '/guild/develop'
            },
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button',
              link: '/components/button'
            },
            {
              text: 'Icon',
              link: '/components/icon'
            }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/xiezhengyun/mydesignvue' }]
  }
}
