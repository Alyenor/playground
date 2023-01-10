export type MenuitemType = {
  title: string,
  url: string,
}
export type MenuType = { type: string, children: MenuitemType[] }

const css: MenuitemType[] = [
  {
    title: 'Twitter Fave',
    url: '/css/twitter-fave',
  },
  {
    title: 'Dice Flex',
    url: '/css/dice-flex',
  },
  {
    title: 'Triangle Tab Bar',
    url: '/css/triangle-tab-bar',
  },
  {
    title: 'Fancy Hover',
    url: '/css/fancy-hover'
  },
  {
    title: 'Flow Animation',
    url: '/css/flow-animation',
  }
]

const game: MenuitemType[] = [
  {
    title: 'Mine Sweeper',
    url: '/game/mine-sweeper',
  }
]

const component: MenuitemType[] = [
  {
    title: 'Modal',
    url: '/component/modal',
  }
]

const app: MenuitemType[] = [
  {
    title: 'Naming',
    url: '/application/naming',
  },
  {
    title: 'Memorizing',
    url: '/application/memorizing',
  }
]

export const menu: MenuType[] = [
  {
    type: 'CSS',
    children: css
  },
  {
    type: 'GAME',
    children: game
  },
  // {
  //   type: 'COMPONENT',
  //   children: component
  // },
  // {
  //   type: 'APPLICATION',
  //   children: app
  // },
]
