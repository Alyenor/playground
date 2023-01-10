import React, {useState} from 'react'
import {IHelmet, MainLayout} from "@/layouts/MainLayout";

import './index.less'
import {toUrl} from "@/utils/navigation";
import {BackToMenuButton} from "@/components";

const initHelmet: IHelmet = {
  isRoot: false,
  title: "Dice Flex",
}

const DiceFlexPage = () => {
  const [helmet] = useState(initHelmet)

  const flexURL = 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout'

  return <MainLayout header helmet={helmet}>
    <div className='flex flex-col items-center px-40'>
      <h2 className='mb-12'>DICE FLEX</h2>
      <section className='flex flex-col items-center mb-8'>
        <h3 className='mb-4'>Demo</h3>
        <div className='mt-6 flex flex-col justify-center items-center'>
          <div className='flex '>
            {/* 一个点 */}
            <div className='dice-container p-4 flex items-center justify-center h-28 w-28 rounded-xl mr-10'>
              <div className='bg-dark-400 h-6 w-6 rounded-full' />
            </div>
            {/* 两个点 */}
            <div className='dice-container p-4 flex justify-between h-28 w-28 rounded-xl mr-10'>
              <div className='bg-dark-400 h-6 w-6 rounded-full' />
              <div className='align-self-end bg-dark-400 h-6 w-6 rounded-full' />
            </div>
            {/* 三个点 */}
            <div className='dice-container p-4 flex h-28 w-28 rounded-xl'>
              <div className='bg-dark-400 h-6 w-6 rounded-full' />
              <div className='align-self-center bg-dark-400 h-6 w-6 rounded-full' />
              <div className='align-self-end bg-dark-400 h-6 w-6 rounded-full' />
            </div>
          </div>
          <div className='flex mt-4'>
            {/* 四个点 */}
            <div className='dice-container p-4 flex justify-between h-28 w-28 rounded-xl mr-10'>
              <div className='flex flex-col justify-between'>
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
              </div>
              <div className='flex flex-col justify-between'>
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
              </div>
            </div>
            {/* 五个点 */}
            <div className='dice-container p-4 flex justify-between h-28 w-28 rounded-xl mr-10'>
              <div className='flex flex-col justify-between'>
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
              </div>
              <div className='align-self-center bg-dark-400 h-6 w-6 rounded-full' />
              <div className='flex flex-col justify-between'>
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
              </div>
            </div>
            {/* 六个点 */}
            <div className='dice-container p-4 flex justify-between h-28 w-28 rounded-xl'>
              <div className='flex flex-col justify-between'>
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
              </div>
              <div className='flex flex-col justify-between'>
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
                <div className='bg-dark-400 h-6 w-6 rounded-full' />
              </div>
            </div>
          </div>
        </div>

      </section>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='mb-4'>Introduction</h3>
        <p>The <i onClick={() => toUrl(flexURL)}
                  className='bg-pink-50 cursor-pointer hover:text-teal-500 hover:bg-light-100 px-2'>
          CSS Flexible Box Layout
        </i>
          module offers a CSS box model that is designed for user interface design and the layout of objects in a single
          dimension.
        </p>

        <p className='mt-4'>Common properties</p>
        <ul>
          <li>- <b>flex</b>: The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space
            available in its flex container.
          </li>
          <li>- <b>flex-direction</b>: The flex-direction CSS property sets how flex items are placed in the flex
            container defining the main axis and the direction (normal or reversed).
          </li>
          <li>- <b>flex-grow</b>: The flex-grow CSS property sets the flex grow factor of a flex item's main size.</li>
          <li>- <b>flex-shrink:</b> The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size
            of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.
          </li>
          <li>- <b>flex-basis</b>: The flex-basis CSS property sets the initial main size of a flex item. It sets the
            size of the content box unless otherwise set with box-sizing.
          </li>
        </ul>

        <p className='mt-4'>Properties for alignment</p>
        <ul>
          <li>- <b>justify-content</b>: The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.</li>
          <li>- <b>align-items</b>: The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.</li>
          <li>- <b>align-self</b>: The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.</li>
        </ul>
      </div>

      <BackToMenuButton />

    </div>
  </MainLayout>
}

const DiceFlex = React.memo(DiceFlexPage)
export default DiceFlex
