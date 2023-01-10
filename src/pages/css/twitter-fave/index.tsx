import React, {useState} from 'react'
import {IHelmet, MainLayout} from "@/layouts/MainLayout";

import './index.less'
import {toUrl} from "@/utils/navigation";
import {BackToMenuButton} from "@/components";

const initHelmet: IHelmet = {
  isRoot: false,
  title: "Twitter Fave",
}

const TwitterFavePage = () => {
  const [helmet] = useState(initHelmet)

  const stepsURL = 'https://designmodo.com/steps-css-animations/#:~:text=steps()%20is%20a%20timing,want%20our%20animation%20to%20take.'

  return <MainLayout header helmet={helmet}>
    <div className='flex flex-col items-center px-40'>
      <h2 className='mb-12'>TWITTER FAVE</h2>
      <div className='flex flex-col justify-center items-center mb-8'>
        <h3 className='mb-4'>Demo</h3>
        <p className='text-sm mt-2'>hover to see animation</p>
        <div className="heart cursor-pointer"/>
      </div>
      <div  className='flex flex-col justify-center items-center'>
        <h3 className='mb-4'>Introduction</h3>
        <div className="mt-2 star cursor-pointer"/>
        <p>Instead of using CSS transitions, the animation use a succession of images.</p>
        <p>
          The CSS animation
          <i onClick={()=>toUrl(stepsURL)}
             className='bg-pink-50 cursor-pointer hover:text-teal-500 hover:bg-light-100 px-2'>
            steps
          </i>
          timing function is the underlying technology
          in this case.
        </p>

        {/* Most timing functions, such as ease or cubic-bezier, animate the transition between the start and end states smoothly. */}
        {/* There is a distinction in the steps timing function. */}
        {/* Instead of a smooth transition, it breaks the transition into several steps and moves sharply between them. */}

        {/* Why not a gif? */}
        {/* Animated gifs could potentially be used but in this case would not be a great fit. */}
        {/* The file size is generally worse and frame rate is difficult to control. */}
        {/* With this method we can pause, rewind, or make all sorts of other adjustments to the animation using CSS. */}

      </div>

      <BackToMenuButton />

    </div>
  </MainLayout>
}

const TwitterFave = React.memo(TwitterFavePage)
export default TwitterFave
