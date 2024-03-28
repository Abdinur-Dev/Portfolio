import React from 'react'
import One from '../assets/img/4.png';
function SectionOne() {
  return (
    <div className="bg-white-400 h-100vh">

   
    <div className='max-w-7xl m-auto p-4  ' >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className=" text col-span-2 space-y-3">
              
              <p className='text-3xl font-semibold text-black-400 '>Hello I'm Graphic Designer</p>
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Alias, qui dolor, itaque excepturi atque amet quis nisi facere cum facilis laudantium ipsa animi ipsum ad in aperiam perspiciatis ea expedita!</p>
                <button className='w-96 h-12 bg-gray-800 text-white'>Red more</button>
            </div>

            <div className=" img col-span-2">
                <img src={One}  className='w-full h-96' alt="" srcset="" />
                </div>

        </div>
    </div>
    </div>
  )
}

export default SectionOne