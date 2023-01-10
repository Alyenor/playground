import React, {useState} from 'react'
import {IHelmet, MainLayout} from "@/layouts/MainLayout";
import {BackToMenuButton} from "@/components";

const initHelmet: IHelmet = {
  isRoot: false,
  title: "3d-box-model",
}

const ModalPage = () => {
  const [helmet] = useState(initHelmet)

  return  <MainLayout header helmet={helmet}>
    <div className='flex flex-col items-center px-40'>
      <div className=''>
        <div className="stack">
          <div className="content card">
            <p><b><span id="desktop-prompt">Hover</span><span id="mobile-prompt">Tap</span> me!</b></p>
            <p>I'm just some example text content so there's something inside this box, nothing much to see here.</p>
          </div>
          <div className="padding card"></div>
          <div className="border card"></div>
          <div className="background card"></div>
          <div className="box-shadow card"></div>
        </div>

      </div>
      <BackToMenuButton />
    </div>

  </MainLayout>
}

const Modal= React.memo(ModalPage)
export default Modal
