import { PostCard } from ".";

const Featured = ({setClicked}) => {
  const arr = ["a", "b", "c"];
  return (
    <>
      {/* topbar */}
      <div className="lg:w-[65%] md:w-[80%] w-[85%] flex flex-col align-middle my-3 h-full ">
        <div className="sticky md:top-0 top-0 bg-[#1D1F26] backdrop-blur-md my-3 bg-blend-saturation ">
          <div className="text-[#A4A4A4] text-opacity-90 font-bold  border-b-[#393C49] mt-3 pb-2  border-b-2    flex justify-between w-full">
            <button>For You</button> <button>Following</button>{" "}
            <button>Tranding</button> <button>Channels</button>
          </div>{" "}
        </div>
        <div className="flex flex-col space-y-7">
          {arr.map((item, index) => (
            <div key={index}>
              <PostCard setClicked={setClicked} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
