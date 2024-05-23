'use client';
import React from 'react'
import Topnav from './landing_components/Topnav'
import Topleft from './landing_components/Topleft';
import Topbar from './profile_components/Topbar';
import Toprigth from './landing_components/Toprigth';

const Landing = () => {
  return (
    <>
    <div className='bg-[#17151A] h-[100%]'>
        <Topnav/>
        <div className='flex'>
            <Topleft/>
            <Toprigth/>
        </div>
        
        
    </div>
    </>
  )
}

export default Landing