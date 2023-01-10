import React, {useState} from 'react'
import {IHelmet, MainLayout} from "@/layouts/MainLayout";
import {BackToMenuButton} from "@/components";

const initHelmet: IHelmet = {
  isRoot: false,
  title: "modal",
}

const ModalPage = () => {
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

const Modal= React.memo(ModalPage)
export default Modal
