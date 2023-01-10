import React, {useState} from 'react'
import {IHelmet, MainLayout} from "@/layouts/MainLayout";
import {BackToMenuButton} from "@/components";

import './index.less'
import {toUrl} from "@/utils/navigation";

const initHelmet: IHelmet = {
  isRoot: false,
  title: "fancy hover",
}

const FancyHoverPage = () => {
  const [helmet] = useState(initHelmet)

  const transitionUrl = 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions'
  const transformUrl = 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform'
  const stackingContextUrl = 'https://github.com/Alyenor/blog/issues/2'
  const essayUrl = 'https://cssanimation.rocks/transition-vs-animation/'

  return <MainLayout header helmet={helmet}>
    <div className='flex flex-col items-center px-40'>
      <div className='flex flex-col justify-center items-center mb-8'>
        <h3 className='mb-4'>Demo</h3>
        <div className='hover1 cursor-pointer px-4 py-2'>
          Hover Me
        </div>
        <div className='relative h-36 w-120 mb-4'>
          <div className="hover2">
            <div className="post">
              <h4 className="post-title">Hover Me</h4>
            </div>
          </div>
        </div>
        <div className='hover3-container relative mb-8'>
          <div className="hover3">Hover Me</div>
        </div>
        <h3 className='mb-4'>Introduction</h3>
        <p>These two examples make exclusive use of the CSS
          <i onClick={() => toUrl(transitionUrl)}
             className='bg-pink-50 cursor-pointer hover:text-teal-500 hover:bg-light-100 px-2'>
            transition
          </i> and
          <i onClick={() => toUrl(transformUrl)}
             className='bg-pink-50 cursor-pointer hover:text-teal-500 hover:bg-light-100 px-2'>
            transform
          </i> properties.</p>
        <p>When I was writing the first demo, I came into a fault, and it concerned the
          <i onClick={() => toUrl(stackingContextUrl)}
             className='bg-pink-50 cursor-pointer hover:text-teal-500 hover:bg-light-100 px-2'>
            stacking context
          </i>.</p>
        <p>There are certain differences to be made between animation and transition,</p>
        <p>
          and <i onClick={() => toUrl(essayUrl)}
                 className='bg-pink-50 cursor-pointer hover:text-teal-500 hover:bg-light-100 px-2'>
          Transitions vs Animations
        </i> is very helpful to me in making these distinctions.
        </p>
      </div>
      <BackToMenuButton />
    </div>
  </MainLayout>
}

const FancyHover = React.memo(FancyHoverPage)
export default FancyHover
