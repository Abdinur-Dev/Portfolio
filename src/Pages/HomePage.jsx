import React from 'react'
import Header from '../component/Header'
import SectionOne from './SectionOne'
import About from './About'
import Project from './Project'

function HomePage() {
  return (
    <div className='space-y-8'>
     
        <SectionOne/>
        <About/>
<Project/>
    </div>
  )
}

export default HomePage