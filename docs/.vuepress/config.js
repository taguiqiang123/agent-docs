import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const autoBase =
  process.env.GITHUB_ACTIONS === 'true' && repoName ? `/${repoName}/` : '/'

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || autoBase,
  lang: 'zh-CN',
  title: 'Agent 学习文档',
  description: '17 节课系统学习 Coding Agent，从架构到落地实现',
  theme: hopeTheme({
    hostname: 'https://agent-learning.local',
    repoDisplay: false,
    breadcrumb: true,
    prevLink: true,
    nextLink: true,
    contributors: false,
    editLink: false,
    pageInfo: ['ReadingTime'],
    navbar: [
      { text: '首页', link: '/' },
      { text: '课程目录', link: '/agent学习文档/' },
      { text: '学习路线', link: '/agent学习文档/#课程目录' },
    ],
    sidebar: {
      '/agent学习文档/': [
        {
          text: '17 节课程',
          collapsible: false,
          children: [
            '/agent学习文档/',
            '/agent学习文档/01-架构总览/',
            '/agent学习文档/02-主循环/',
            '/agent学习文档/03-上下文工程/',
            '/agent学习文档/04-工具系统/',
            '/agent学习文档/05-安全层与护栏/',
            '/agent学习文档/06-文件修改机制/',
            '/agent学习文档/07-验证机制/',
            '/agent学习文档/08-上下文压缩与记忆更新/',
            '/agent学习文档/09-计划与分解/',
            '/agent学习文档/10-失败恢复与重试机制/',
            '/agent学习文档/11-工具接口设计/',
            '/agent学习文档/12-状态机视角/',
            '/agent学习文档/13-多Agent与角色分工/',
            '/agent学习文档/14-评估与Evals/',
            '/agent学习文档/15-人类介入与审批点/',
            '/agent学习文档/16-长期记忆与外部记忆/',
            '/agent学习文档/17-最小可实现Agent总体设计/',
          ],
        },
      ],
    },
    plugins: {
      icon: {
        assets: 'iconify',
      },
    },
    markdown: {
      mermaid: true,
    },
  }),
  bundler: viteBundler(),
})
