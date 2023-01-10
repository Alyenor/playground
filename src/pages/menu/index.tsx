import React, {useState} from 'react'
import {IHelmet, MainLayout} from "@/layouts/MainLayout";
import {menu} from "@/constants/menu";
import {useNavigate} from "react-router-dom";

const initHelmet: IHelmet = {
  isRoot: false,
  title: "menu",
}

const MenuPage = () => {

  const nav = useNavigate()

  const [helmet] = useState(initHelmet)


  return  <MainLayout header helmet={helmet}>
    <div className='flex flex-col justify-center items-center'>
      <h2 className='mb-12'>MENU</h2>
      <div className="flex">
        <div>
          {
            menu.map(item=>{
              return <div key={item.type} className='mb-8'>
                <h3 className='mb-4'>{item.type}</h3>
                {
                  item.children.map(child=>{
                    return <div key={child.title}
                                onClick={()=>nav(child.url)}
                                className='mb-2 cursor-pointer hover:text-teal-500 hover:font-heavy'
                    >
                      {child.title}
                    </div>
                  })
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  </MainLayout>
}

const Menu= React.memo(MenuPage)
export default Menu
