import React from 'react'

const BottomBtn = ({setClicked}) => {
  return (
    <div className="space-y-6 py-4 bottom-0 flex flex-col ">
        <button className="py-3 w-[90%] text text-[#7501E9] border-[#7501E9] border-2  rounded-xl">
          Create Project
        </button>
        <button onClick={() => setClicked(1)} className="bg-[#7501E9] py-3  w-[90%] text text-white border-none  rounded-xl">
          Create Post
        </button>
      </div>
  )
}

export default BottomBtn