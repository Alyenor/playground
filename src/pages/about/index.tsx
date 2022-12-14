import React, {useState} from 'react'
import {IHelmet, MainLayout} from "@/layouts/MainLayout";
import {BackToMenuButton} from "@/components";

const initHelmet: IHelmet = {
  isRoot: false,
  title: "about",
}

const AboutPage = () => {
  const [helmet] = useState(initHelmet)

  return  <MainLayout header helmet={helmet}>
    <div className=''>
     ABOUT
    </div>
    <BackToMenuButton />
  </MainLayout>
}

const About= React.memo(AboutPage)
export default About
