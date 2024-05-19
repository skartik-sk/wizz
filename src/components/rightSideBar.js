
const rightSideBar = () => {
    const arr= ["a","b","c"]
    const arr2= ["a","b"]
return (
    <div className="fixed right-">
        <div className="w-full h-[100vh] pb-12 px-4 flex flex-col  justify-start">
            <div className="mb-10 rounded-b-xl bg-[#3C404B] px-10 py-10 flex space-x-4 align-middle">
                <div className="">
                    <img
                        className="rounded-full h-16 w-16"
                        src="https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                        alt=""
                    />
                </div>
                <div className="flex flex-col text-white justify-center">
                    <div>Name</div>
                    <div className="text-sm text-[#D9D9D9]">@UserName</div>
                </div>
            </div>
            {/* Whome to Followes */}
            <div>
                <div className="text-[#A4A4A4] mb-3">Whome to Follow</div>
                <div className="mb-4">
                    {arr.map((item, index) => (
                        <div key={index}>
<div className=" py-2 flex space-x-4 align-middle justify-between ">
                <div className="flex space-x-4 align-middle">
                <div className="">
                    <img
                        className="rounded-full h-12 w-12"
                        src="https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                        alt=""
                    />
                </div>
                <div className="flex flex-col text-white justify-center">
                    <div>Name</div>
                    <div className="text-sm text-[#D9D9D9]">@UserName</div>
                </div>
                </div>
                <div>
                <button className="bg-[#7501E9] py-2 px-7 w-full text-sm text-white border-none rounded-full">
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
                <div className="text-[#A4A4A4] mb-3"> What&apos;s happening</div>
                <div>
                    {arr2.map((item, index) => (
                        <div key={index}>
<div className=" bg-[#F0F0F0] bg-opacity-5 p-4 my-3 rounded-xl text-[#EDEDED]">
                <div className="font-bold text-l text-white">
                #BockchainCoders
                </div>
                <div className="  text-sm truncate">Stop scratching your head all day, searching right tool to start with, betterbuild is your all in one place.</div>
                       <div className="text-sm">3.8K people</div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>


            
        </div>
    </div>
);
}

export default rightSideBar