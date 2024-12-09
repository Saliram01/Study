import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import {motion} from 'framer-motion';

function Card({data,reference}) {
  return (
    <motion.div drag 
    
    dragConstraints={reference}
    whileDrag={{scale:1.1}}
    whileHover={{boxShadow: '0 0 10px #fff'}}
    dragTransition={{bounceDamping:10, bounceStiffness:600}}
    className="relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-sky-900/90 text-white m-8 py-10 px-8 overflow-hidden">
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className=" absolute bottom-0 w-full left-0 ">
            <div className="flex items-center justify-between py-3 px-8 mb-3">
                <h5>{data.fileSize}</h5>
                <span className='w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center cursor-pointer'>
                    {data.close ? <IoMdClose/> : <FiDownload size=".7em" color='#fff'/> }
                </span>
            </div>

            {
                data.tag.isOpen && (
                    <div className={`w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>
                            {data.tag.tagTitle}
                        </h3>
                    </div>
                )
            }
           
        </div>
    </motion.div>
  )
}

export default Card
