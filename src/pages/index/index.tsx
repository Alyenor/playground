import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button, Image} from 'antd'
import {MainLayout, IHelmet} from '@/layouts/MainLayout'
import fish from '@/assets/images/fish.png'
import dog from '@/assets/images/dog.png'
import hippo from '@/assets/images/hippo.png'
import crab from '@/assets/images/crab.png'
import arrow from '@/assets/images/arrow.png'
import './index.less'
import {IconContainer} from '@/components/index'
import {menu} from "@/constants/menu";
import {getRandomInt} from "@/utils/math";
import {selected} from "@/constants/selected";

const initHelmet: IHelmet = {
  isRoot: true,
  description: "Playground",
}

const IndexPage = () => {
  const nav = useNavigate()

  const [helmet] = useState(initHelmet)

  const menuPaths = (menu.map(item => item.children)).flat()

  const onRandomize = () => {
    const randomNumber = getRandomInt(menuPaths.length)
    const path = menuPaths[randomNumber].url
    nav(path)
  }

  return (
    <MainLayout helmet={helmet}>
      <section className="top-section bg-light-100">
        <div className="pt-28 pb-18 w-full flex items-center justify-center ">
          <div className="box p-4 h-110 w-100 bg-light-100 flex flex-col justify-center ">
            <h2>PLAYGROUND</h2>
            <div className="text-sm mt-6 flex">
              <IconContainer source={fish} className="mr-3" />
              <IconContainer source={dog} className="mr-3" />
              <IconContainer source={hippo} className="mr-3" />
              <IconContainer source={crab} />
            </div>
            <div className="mt-4 mb-10 text-sm">
              <p>
                I create some UIKits and tiny games on this site, and I hope you
                enjoy them.
              </p>
            </div>
            <div className="cursor-pointer w-32 px-4 py-2 flex justify-center
            text-teal-400 border-2 rounded-xl border-teal-400
            hover:bg-teal-400 hover:text-light-100"
                 onClick={onRandomize}
            >
              Randomize
            </div>
          </div>
        </div>
      </section>
      <section className="bg-teal-50 flex flex-col justify-center items-center py-6">
        <h3 className="my-12">SELECTED PROJECTS</h3>
        {
          selected.map((item, index) => (
            <div key={item.title}
                 className={`w-2/3 py-12 px-6 flex justify-between cursor-pointer border-dark-400 border-b ${index === 0 ? 'border-t' : ''}`}
                 onClick={() => nav(item.url)}
            >
              <div className='flex'>
                <div className='text-sm w-10 mr-8'>{`- 0${index + 1}`}</div>
                <div className='flex-2 w-4/5'>
                  <h3 className="mb-4 project-title">{item.title}</h3>
                  <p className='text-sm'>{item.introduce}</p>
                </div>
              </div>
              <div className='flex items-center'>
                <IconContainer source={arrow} width={40} height={30} />
              </div>
            </div>))
        }
        <div onClick={() => nav('/menu')}
             className='cursor-pointer mt-14 mb-6 px-10 py-2 border-2 border-dark-400 rounded-lg hover:bg-dark-400 hover:text-light-100'>
          Explore More Projects
        </div>
      </section>
    </MainLayout>
  )
}

const Index = React.memo(IndexPage)
export default Index
