import React from 'react'
import three from '../assets/img/3.jpeg';
function About() {
  return (
    <div className='max-w-7xl m-auto'>
      
 
     
            

            <div className="grid grid-cols-2 gap-4 ">


                {/* #left */}
               
               <div className="img">
   <img src={three} alt="" srcset="" />
               </div>

               <div className="textInfo">
               <h1 className='text-sky-300 text-4xl text-start text-blue-400 '>About us</h1>
               <div className="">
                     <div className="title">
                        <p className='text-2xl text-danger '>Background</p>
                      

                     </div>
                     <div className="body">
                     <p>the kind of family you come from and the kind of education you have had. 
                        or the type of work experience that you have.!!</p>
                     </div>
                </div>

                <div className="">
                     <div className="title">
                        <p className='text-2xl text-danger '>Education</p>
                      

                     </div>
                     <div className="body">
                     <p>the kind of family you come from and the kind of education you have had. 
                        or the type of work experience that you have.!!</p>
                     </div>
                </div>


     {/* #left */}
     <div className="">
                     <div className="title">
                        <p className='text-2xl text-danger '>Interest</p>
                      

                     </div>
                     <div className="body">
                     <p>the kind of family you come from and the kind of education you have had. 
                        or the type of work experience that you have.!!</p>
                     </div>
                </div>

                {/* <div className="">
                     <div className="title">
                        <p className='text-2xl text-danger '>Background</p>
                      

                     </div>
                     <div className="body">
                     <p>the kind of family you come from and the kind of education you have had. 
                        or the type of work experience that you have.!!</p>
                     </div>
                </div> */}


               </div>

            </div>











      
     </div>
  )
}

export default About