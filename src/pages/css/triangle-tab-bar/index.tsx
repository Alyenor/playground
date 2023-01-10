import React, {useState} from 'react'
import {IHelmet, MainLayout} from "@/layouts/MainLayout";
import {BackToMenuButton} from "@/components";

import './index.less'

const initHelmet: IHelmet = {
  isRoot: false,
  title: "triangle tab bar",
}

const TriBarPage = () => {
  const [helmet] = useState(initHelmet)

  return <MainLayout header helmet={helmet}>
    <div className='flex flex-col items-center px-40'>
      <div className='flex flex-col justify-center items-center mb-8'>
        <h3 className='mb-4'>Demo</h3>
        {/* 三角形 */}
        <div className='my-2 flex flex-col justify-center items-center'>
          <p className='text-sm'>a single triangle</p>
          <div className="triangle" />
        </div>
        {/* 箭头 */}
        <div className='mt-6 mb-4 flex flex-col justify-center items-center'>
          <p className='text-sm mb-4'>the same way to draw arrows</p>
          <div className='flex w-full justify-between'>
            <div className='tri-arrow up' />
            <div className='tri-arrow left' />
            <div className='tri-arrow down' />
            <div className='tri-arrow right' />
          </div>
        </div>

        <div className='w-full mt-6 mb-4 flex flex-col justify-center items-center'>
          <p className='text-sm mb-4'>the same method was used to make this progress bar</p>
          <div className="w-full flex justify-between">
            <div className='bg-teal-50 w-20 px-10 py-2 relative bar-item-first'>S1</div>
            <div className='bg-teal-50 w-20 px-10 py-2 relative bar-item'>S2</div>
            <div className='bg-teal-50 w-20 px-10 py-2 relative bar-item active'>S3</div>
            <div className='bg-teal-50 w-20 px-10 py-2 relative bar-item'>S4</div>
            <div className='bg-teal-50 w-20 px-10 py-2 relative bar-item'>S5</div>
          </div>
        </div>
      </div>

      <div className='mt-8 flex flex-col justify-center items-center'>
        <h3 className='mb-4'>Introduction</h3>
        <p>The concept is based on a square with no height or width. The arrow's
          actual dimensions , including its width and height, are determined by
          the margin's width. For instance, the triangle that makes up an up arrow
          is formed by the bottom border being colored while the left and right are translucent.</p>
      </div>
      <BackToMenuButton />
    </div>

  </MainLayout>
}

const TriBar = React.memo(TriBarPage)
export default TriBar
