import React from 'react'
import Profile from './connectionr_components/Profile'
import MiniProfile from './connectionr_components/miniProfile'

const connection = () => {
    const arr = ["a", "b", "c"];
  const arr2 = ["a", "b"];
  return (
    <div className="w-3/4  flex flex-col   p-4">
{/* top */}
<Profile/>
{/* list */}
<div className='flex flex-col '>
    {arr.map((item, index) => (
        <div key={index}>
            <MiniProfile/>
        </div>
    ))}
</div>
    </div>
  )
}

export default connection