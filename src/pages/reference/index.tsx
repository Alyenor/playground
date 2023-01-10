import React, {useState} from 'react'
import {toUrl} from "@/utils/navigation";
import {refs, RefType} from './constants'
import {IHelmet, MainLayout} from "@/layouts/MainLayout";

const initHelmet: IHelmet = {
  isRoot: false,
  title: "Reference",
}

const ReferencePage = () => {
  const [helmet] = useState(initHelmet)
  const refOdd = refs.filter((_, index) => index % 2)
  const refEven = refs.filter((_, index) => !(index % 2))

  const getRefItem = (item: RefType) =>
    <div className='mb-8' key={item.type}>
      <h3 className='mb-2'> {item.type}</h3>
      {
        item.children.map((child) =>
          <div key={child.title}
               className='cursor-pointer hover:text-green-400'
               onClick={() => toUrl(child.url)}
          >
            {child.title}
          </div>)
      }
    </div>

  return <MainLayout header helmet={helmet}>
    <div className='flex flex-col justify-center items-center'>
      <h2 className='mb-12'>REFERENCE</h2>
      <div className="flex">
        <div className='mr-20'>
          {
            refEven.map((item) => getRefItem(item))
          }
        </div>
        <div>
          {
            refOdd.map((item) => getRefItem(item))
          }
        </div>
      </div>
    </div>
  </MainLayout>
}

const Reference = React.memo(ReferencePage)
export default Reference
