import React from 'react'
import One from '../assets/img/1.jpeg';

function Project() {
  return (
  <div className="m-2">
      <div className='max-w-6xl m-auto '>
       <p className='text-4xl m-2'>Our Projects</p>
        <div className="grid grid-cols-4 gap-4 ">

            <div className="cardbox border bg-gray-200 " >
               <div className="img">
               <img src={One} className='w-full h-52' alt="" srcset="" />
               </div>
               <div>
                <h1>Graphic designe</h1>
               </div>

            </div>


            <div className="cardbox border bg-gray-200 " >
               <div className="img">
               <img src={One} className='w-full h-52' alt="" srcset="" />
               </div>
               <div>
                <h1>Graphic designe</h1>
               </div>

            </div>




            <div className="cardbox border bg-gray-200 " >
               <div className="img">
               <img src={One} className='w-full h-52' alt="" srcset="" />
               </div>
               <div>
                <h1>Graphic designe</h1>
               </div>

            </div>


            <div className="cardbox border bg-gray-200 " >
               <div className="img">
               <img src={One} className='w-full h-52' alt="" srcset="" />
               </div>
               <div>
                <h1>Graphic designe</h1>
               </div>

            </div>


        </div>

    </div>
  </div>
  )
}

export default Project