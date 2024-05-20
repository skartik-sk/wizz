import React from 'react'

const Profile = () => {
  return (
    <div className="mb-10 rounded-b-xl bg-[#3C404B] px-10 py-10 flex space-x-4 align-middle">
    <div className="">
        <img 
        
    
            className="rounded-full h-20 w-20  "
           src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"/>
    </div>
    <div className="flex flex-col text-white justify-center">
        <div className="text-xl font-semibold">Name</div>
        <div className="text-sm text-[#D9D9D9]">@UserName</div>
    </div>
</div>
  )
}

export default Profile