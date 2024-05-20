
const rightSideBar = () => {
    const arr= ["a","b","c"]
    const arr2= ["a","b"]
return (
    
        <div className=" h-[100vh]  px-4 flex flex-col  justify-start">
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
            {/* Whome to Followes */}
            <div>
                <div className="text-[#A4A4A4]  text-opacity-90 mb-3">Whome to Follow</div>
                <div className="mb-4">
                    {arr.map((item, index) => (
                        <div key={index}>
<div className=" py-2 flex space-x-4 align-middle justify-between ">
                <div className="flex space-x-4 align-middle">
                <div className="">
                    <img
                        className="rounded-full h-14 w-14"
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt=""
                    />
                </div>
                <div className="flex flex-col text-white justify-center">
                    <div className="text-lg font-semibold text-[#F3F3F3] text-opacity-90">Name</div>
                    <div className="text-sm text-[#D9D9D9]">@UserName</div>
                </div>
                </div>
                <div>
                <button className="bg-[#7501E9] py-2 px-7 w-full text-sm text-white border-none rounded-full font-semibold">
                    Follow
                </button>
                </div>
            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* what's happening */}
            <div>
                <div className="text-[#A4A4A4]  text-opacity-90  mb-3"> What&apos;s happening</div>
                <div>
                    {arr2.map((item, index) => (
                        <div key={index}>
<div className=" bg-[#F0F0F0] bg-opacity-5 p-4 my-3 rounded-xl text-[#EDEDED] space-y-1">
                <div className="font-semibold text-lg text-white">
                #BockchainCoders
                </div>
                <div className="  truncate">Stop scratching your head all day, searching right tool to start with, betterbuild is your all in one place.</div>
                       <div className="text-sm">3.8K people</div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>


            
        </div>
    
);
}

export default rightSideBar