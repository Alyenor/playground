const algo = [
  {
    title: 'leetcode',
    url: 'https://leetcode.com/problemset/all/'
  },
  {
    title: 'codetop',
    url: 'https://codetop.cc/home'
  },
  {
    title: 'acwing',
    url: 'https://www.acwing.com/activity/content/31/'
  },
]

const tool = [
  {
    title: 'windicss',
    url: 'https://cn.windicss.org/'
  },
  {
    title: 'quillbot',
    url: 'https://quillbot.com/'
  },
  {
    title: 'antd',
    url: 'https://ant.design/components/overview-cn/'
  },
  {
    title: 'tinypng',
    url: 'https://tinypng.com/'
  }
]

const design = [
  {
    title: 'palettable',
    url: 'https://www.palettable.io/'
  },
  {
    title: 'iconfont',
    url: 'https://www.iconfont.cn/'
  },
  {
    title: 'dotown',
    url: 'https://dotown.maeda-design-room.net/'
  },
  {
    title: 'kenney asset',
    url: 'https://kenney.nl/'
  },
  {
    title: 'quaternius',
    url: 'https://quaternius.com/'
  },
]

const references = [
  {
    title: 'moooi',
    url: 'https://www.moooi.com/en/a-life-extraordinary#tokyo-blue'
  },
  {
    title: 'freefrontend',
    url: 'https://freefrontend.com/'
  },
  {
    title: 'bestwebsite',
    url: 'https://bestwebsite.gallery/'
  },
  {
    title: 'ife',
    url: 'https://ife.baidu.com/encyclopedia/readme1.html'
  },
  {
    title: 'box shadow sample',
    url: 'https://getcssscan.com/css-box-shadow-examples'
  },
]

const movies = [
  {
    title: 'pantheon',
    url: "https://ddys2.me/pantheon/"
  }
]

export const refs = [
  {
    type: 'ALGORITHM',
    children: algo
  },
  {
    type: 'DESIGN',
    children: design
  },
  {
    type: 'TOOLS',
    children: tool
  },
  {
    type: 'REFERENCES',
    children: references
  },
  {
    type: 'MOVIE',
    children: movies
  }
]

export type RefType = { type: string, children: { title: string, url: string }[] }


