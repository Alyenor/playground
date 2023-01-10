import React, {useState} from 'react'
import {IHelmet, MainLayout} from "@/layouts/MainLayout";
import {BackToMenuButton, IconContainer} from "@/components";
import balloon from "@/assets/images/balloon.png";
import helicopter from "@/assets/images/helicopter.png";
import painting from "@/assets/images/painting.png";
import newspaper from "@/assets/images/newspaper.png";

import './index.less'
import {toUrl} from "@/utils/navigation";

const initHelmet: IHelmet = {
  isRoot: false,
  title: "flow animation",
}

const FlowAnimationPage = () => {
  const [helmet] = useState(initHelmet)

  const keyframeUrl = 'https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes'

  return <MainLayout header helmet={helmet}>
    <div className='flex flex-col items-center px-40'>
      <h3 className='mb-4'>Demo</h3>
      <div className='flex'>
        <div className='flex flex-col justify-center items-center relative mr-28'>
          <div className='flex items-center relative'>
            <div
              className="bg-white w-28 h-28 z-50 rounded-2xl border shadow-md flex items-center justify-center describtion ">
              <IconContainer source={newspaper} width={60} height={60} />
              <p className='absolute w-40 left-40 text-lg'>
                Step 1
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="animate-line animate-line-vertical">
              <div
                className="animate-line-move animate-line-vertical-1 relative flex flex-col justify-end items-center">
                <div className="bg-red-400 w-2 h-2 rounded mb-2" />
                <div className="bg-red-400 w-3 h-3 rounded-xl " />
              </div>
            </div>
          </div>

          <div className='flex items-center relative'>
            <div
              className="bg-white w-28 h-28 z-50 rounded-2xl border shadow-md flex items-center justify-center animate-logo animate-logo-1">
              <IconContainer source={helicopter} width={60} height={60} />
            </div>
            <p className='absolute w-40 left-40 text-lg'>
              Step 2
            </p>
          </div>

          <div
            className="animate-line animate-line-vertical relative flex flex-col justify-end items-center">
            <div
              className={`animate-line-move animate-line-vertical-2 relative flex flex-col justify-end items-center `}>
              <div className="w-2 h-2 rounded mb-2" style={{backgroundColor: "#45B058"}} />
              <div className="w-3 h-3 rounded-xl " style={{backgroundColor: "#45B058"}} />
            </div>
          </div>

          <div className='flex relative'>
            <div className='flex flex-col items-end justify-center'>
              <div className='animate-line animate-line-parallel'>
                <div
                  className="animate-line-move animate-line-parallel-1 relative flex items-center">
                  <div className="w-3 h-3 rounded-xl mr-2"
                       style={{backgroundColor: "#45B058"}} />
                  <div className="w-2 h-2 rounded " style={{backgroundColor: "#45B058"}} />
                </div>
              </div>

              <div className='flex flex-col w-56 items-center  justify-center'>
                <div className='animate-line animate-line-vertical'>
                  <div
                    className={`animate-line-move animate-line-vertical-3 relative flex flex-col justify-end items-center `}>
                    <div className="w-2 h-2 rounded mb-2"
                         style={{backgroundColor: "#45B058"}} />
                    <div className="w-3 h-3 rounded-xl "
                         style={{backgroundColor: "#45B058"}} />
                  </div>
                </div>
                <div
                  className="bg-white w-28 h-28 z-50 rounded-2xl border shadow-md flex items-center justify-center animate-logo animate-logo-2">
                  <IconContainer source={painting} width={60} height={60} />
                </div>
              </div>
            </div>

            <div className='flex flex-col items-start justify-center'>
              <div className='animate-line animate-line-parallel'>
                <div
                  className="animate-line-move animate-line-parallel-2 relative flex items-center">
                  <div className="w-2 h-2 rounded mr-2" style={{backgroundColor: "#45B058"}} />
                  <div className="w-3 h-3 rounded-xl" style={{backgroundColor: "#45B058"}} />
                </div>
              </div>
              <div className='flex flex-col w-56 items-center  justify-center'>
                <div className='animate-line animate-line-vertical'>
                  <div
                    className="animate-line-move animate-line-vertical-3 relative flex flex-col justify-end items-center">
                    <div className="w-2 h-2 rounded mb-2"
                         style={{backgroundColor: "#45B058"}} />
                    <div className="w-3 h-3 rounded-xl "
                         style={{backgroundColor: "#45B058"}} />
                  </div>
                </div>
                <div
                  className="bg-white w-28 h-28 z-50 rounded-2xl border shadow-md flex items-center justify-center animate-logo animate-logo-2">
                  <IconContainer source={balloon} width={60} height={60} />
                </div>
              </div>
            </div>
            <div className='absolute w-40 top-20 left-112 text-lg'>
              <p>Step 3</p>
              <p>&</p>
              <p>Step 4</p>
            </div>
          </div>
        </div>
      </div>
      <h3 className='mt-10 mb-4'>Introduction</h3>
      <p>In this instance, the animation sequence was defined by utilizing
        <i onClick={() => toUrl(keyframeUrl)}
           className='bg-pink-50 cursor-pointer hover:text-teal-500 hover:bg-light-100 px-2'>
          keyframes
        </i>. The animation is produced by smoothly transitioning from one set of CSS styles to another
        throughout the course of its duration.</p>
      <p>
        You have the ability to make several adjustments to the set of CSS styles at any point
        throughout the animation.
      </p>
      <p>
        Indicate in percent when the style will undergo a change, or use the transitional
        phrases "from" and "to," which have the same meaning as 0% and 100%, respectively.
      </p>
      <p>
        The animation starts at 0% and ends at 100%; 0% represents the beginning and 100%
        represents the end.
      </p>
      <BackToMenuButton />
    </div>


  </MainLayout>
}

const FlowAni = React.memo(FlowAnimationPage)
export default FlowAni
