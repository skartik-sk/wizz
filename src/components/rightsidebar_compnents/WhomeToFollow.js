import React, {useState} from 'react'
import ShortProfile from './ShortProfile';

const WhomeToFollow = () => {
    const arr= ["a","b","c"]
    const arr2= ["a","b"]
    const [isFollowing, setIsFollowing] = useState(false);
    const toggleFollow = () => {
        setIsFollowing(!isFollowing);
        }
  return (
    <div>
    <div className="text-[#A4A4A4]  text-opacity-90 mb-3">Whome to Follow</div>
    <div className="mb-4">
        {arr.map((item, index) => (
            <div key={index}>
<ShortProfile/>
            </div>
        ))}
    </div>
</div>
  )
}

export default WhomeToFollow