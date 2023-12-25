import React, { useRef, useState } from 'react'
import Card from './Card'
//this component is for the cards that will be on our page
function Foreground() {
const ref = useRef(null)

  const data = [
    {
      desc: 'Hey there ! How are you ?',
      filesize:'1.1mb',
      close: false,
      tag: {isOpen:true, tagTitle:'Download', tagColor:'teal'}
    },
    {
      desc: 'Hey there ! How are you ?',
      filesize:'1.1mb',
      close: false,
      tag: {isOpen:true, tagTitle:'Download', tagColor:'cyan'}
    },
    {
      desc: 'Hey there ! How are you ?',
      filesize:'1.1mb',
      close: false,
      tag: {isOpen:false, tagTitle:'Download', tagColor:'green'}
    },
  ]

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground
