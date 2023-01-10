import React, {useState} from 'react'
import {IHelmet, MainLayout} from "@/layouts/MainLayout";
import {BackToMenuButton} from "@/components";

import './index.less'

const initHelmet: IHelmet = {
  isRoot: false,
  title: "memorizing",
}

const MemorizingPage = () => {
  const [helmet] = useState(initHelmet)

  return  <MainLayout header helmet={helmet}>
    <div className='flex flex-col items-center px-40'>
      <div className=''>
        component
      </div>
      <BackToMenuButton />
    </div>

  </MainLayout>
}

const Naming= React.memo(MemorizingPage)
export default Naming
