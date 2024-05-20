import React,{useState} from 'react'

const ShortProfile = () => {
    const [isFollowing, setIsFollowing] = useState(false);
    const toggleFollow = () => {
        setIsFollowing(!isFollowing);
        }

  return (
    <div className=" py-2 flex space-x-4 align-middle justify-between ">
    <div className="flex space-x-4 align-middle">
      <div className="">
        <img
          className="rounded-full h-12 w-12"
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col text-white justify-center">
        <div className="text-lg font-medium text-[#F3F3F3] text-opacity-90">
          Name
        </div>
        <div className="text-sm font-light text-[#D9D9D9]">@UserName</div>
      </div>
    </div>
    <div className="flex flex-col justify-center">
      {isFollowing ? (
        <button onClick={toggleFollow} className=" border-[1px] py-2 border-white px-7 w-full text-sm text-white  rounded-full font-medium">
          Unfollow
        </button>
      ) : (
        <button onClick={toggleFollow} className="bg-[#7501E9] py-2 px-7 w-full text-sm text-white border-none rounded-full font-medium">
        Follow
      </button>
      )}
      
    </div>
  
</div>
  )
}

export default ShortProfile