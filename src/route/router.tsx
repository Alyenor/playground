import React, {Suspense} from 'react'
import type {RouteObject} from 'react-router-dom'

import Index from '@/pages/index'

const About = React.lazy(() => import('../pages/about'))
const Menu = React.lazy(() => import('../pages/menu'))
const Ref = React.lazy(() => import('../pages/reference'))

const TwitterFave = React.lazy(() => import('../pages/css/twitter-fave'))
const DiceFlex = React.lazy(() => import('../pages/css/dice-flex'))
const TriangleTabBar = React.lazy(() => import('../pages/css/triangle-tab-bar'))
const FancyHover = React.lazy(() => import('../pages/css/fancy-hover'))
const FlowAnim = React.lazy(() => import('../pages/css/flow-animation'))

const MineSweeper = React.lazy(() => import('../pages/game/mine-sweeper'))

const Modal = React.lazy(() => import('../pages/components/modal'))

const Naming = React.lazy(() => import('../pages/application/naming'))
const Memorizing = React.lazy(() => import('../pages/application/memorizing'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/menu',
    element: (
      <Suspense fallback={<span>loading component</span>}>
        <Menu />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<span>loading component</span>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: '/ref',
    element: <Suspense fallback={<span>loading component</span>}>
      <Ref />
    </Suspense>
  },
  {
    path: '/css',
    children: [
      {
        path: '/css/twitter-fave',
        element: <Suspense fallback={<span>loading component</span>}>
          <TwitterFave />
        </Suspense>
      },
      {
        path: '/css/dice-flex',
        element: <Suspense fallback={<span>loading component</span>}>
          <DiceFlex />
        </Suspense>
      },
      {
        path: '/css/flow-animation',
        element: <Suspense fallback={<span>loading component</span>}>
          <FlowAnim />
        </Suspense>
      },
      {
        path: '/css/triangle-tab-bar',
        element: <Suspense fallback={<span>loading component</span>}>
          <TriangleTabBar />
        </Suspense>
      },
      {
        path: '/css/fancy-hover',
        element: <Suspense fallback={<span>loading component</span>}>
          <FancyHover />
        </Suspense>
      },
    ]
  },
  {
    path: '/game',
    children: [
      {
        path: '/game/mine-sweeper',
        element: <Suspense fallback={<span>loading component</span>}>
          <MineSweeper />
        </Suspense>
      }
    ]
  },
  {
    path: '/component',
    children: [
      {
        path: '/component/modal',
        element: <Suspense fallback={<span>loading component</span>}>
          <Modal />
        </Suspense>
      }
    ]
  },
  {
    path: '/application',
    children: [
      {
        path: '/application/naming',
        element: <Suspense fallback={<span>loading component</span>}>
          <Naming />
        </Suspense>
      },
      {
        path: '/application/memorizing',
        element: <Suspense fallback={<span>loading component</span>}>
          <Memorizing />
        </Suspense>
      }
    ]
  },
]

export default routes
