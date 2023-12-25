import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='relative flex flex-shrink-0 h-72 w-60 rounded-[50px] bg-zinc-900/90 text-zinc-200 p-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm mt-10 leading-tight font-semibold '>{data.desc}</p>
        <div className='absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 rounded-full bg-zinc-600 flex items-center justify-center'>
                    {data.close ? <MdOutlineFileDownload size={12} color='#fff'/> : <IoClose/>}
                </span>
            </div>
            {data.tag.isOpen && <div className={`w-full flex items-center justify-center py-2 ${data.tag.tagColor==='teal' ? 'bg-teal-900' : 'bg-cyan-600'}`}>
                <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
            </div>}
        </div>
    </motion.div>
  )
}

export default Card
