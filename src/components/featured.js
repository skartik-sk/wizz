import { PostCard } from "."

const Featured = () => {
  const arr = ["a"]
    return (
<>

        {/* topbar */}
        <div className="w-3/4 flex flex-col align-middle justify-center ">
          <div className="text-[#A4A4A4] text-opacity-90 font-bold  border-b-[#393C49]  border-b-2 m-3 p-2 flex justify-around w-full">
            <button>For You</button>  <button>Following</button>  <button>Tranding</button>  <button>Channels</button>
          </div>
          <div>
          {arr.map((item, index) => (
                        <div key={index}>
                          <PostCard/>
                        </div>

                    ))}
          </div>
        </div>
        </>

       
 
    )
  }
  
  export default Featured