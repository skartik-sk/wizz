import { PostCard } from ".";

const Featured = ({setClicked}) => {
  const arr = ["a", "b", "c"];
  return (
    <>
      {/* topbar */}
      <div className="w-[65%] flex flex-col align-middle my-3 h-full ">
        <div className="sticky top-0 bg-[#1D1F26] bg-opacity-85 bg-blend-saturation ">
          <div className="text-[#A4A4A4] text-opacity-90 font-bold  border-b-[#393C49]  border-b-2  py-2 my-3 flex justify-between w-full">
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
