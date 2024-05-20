import Profile from "./rightsidebar_compnents/Profile";
import WhatHeppening from "./rightsidebar_compnents/WhatHeppening";
import WhomeToFollow from "./rightsidebar_compnents/WhomeToFollow";

const rightSideBar = () => {
    const arr= ["a","b","c"]
    const arr2= ["a","b"]
return (
    
        <div className=" h-full  px-4 flex flex-col  justify-start">
            <Profile/>
            {/* Whome to Followes */}
           <WhomeToFollow/>
            
            {/* what's happening */}
          <WhatHeppening/>


            
        </div>
    
);
}

export default rightSideBar