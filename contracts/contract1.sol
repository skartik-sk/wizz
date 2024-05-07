// SPDX-License-Identifier: MIT

pragma solidity >=0.8.11 ;

contract WizzMainContract {

    address public Owner;
    address[] public users;
    uint256 public userCount;
    uint256 public projectCount;
    uint256 public postCount;

    struct UserProfile {
        bytes32 uuid;
        uint256 userNumber;
        string userRefId;
        string username;
        string name;
        string email;
        string index;
        address userAddress;
        address[] followers;
        address[] following;
        uint256 userPostCount;
        uint256[] allUserPosts;
        bytes32[] Projects;
    }

    mapping(address => UserProfile) public profiles;
    mapping(string => address) private usernameToAddress;

    struct UserPost {
        bytes32 id;
        uint256 postNumber;
        uint256 userPostNumber;
        string content;
        address creatorAddress;
        uint256 TimeStamp;
        bytes32[] IPFSImagesRef;
        address[] likedBy;
    }

    mapping(uint256 => UserPost) public allPostsByNumber;

    struct Project {
        bytes32 id;
        uint256 projectNumber;
        string projectRefId;
        string title;
        string smallDescription;
        address creatorAddress;
        address[] members;
        uint256 postCount;
        bytes32[] posts;
    }

    constructor (){
        Owner = msg.sender;
        userCount = 1;
        projectCount =1;
        postCount =1;
    }

    event NewUser(address indexed userAddress, string username, bytes32 uuid);
    event Follow(address indexed follower, address indexed following);
    event Unfollow(address indexed follower, address indexed unfollowing);
    event NewUserPost(address indexed creatorAddress, uint256 indexed postCount, bytes32 indexed id);

    //Create and Update User Info Functions

    function createUser(string memory _username, string memory _name, string memory _email, string memory _index) external {

        require(usernameToAddress[_username] == address(0), "Username already exists");
        require(profiles[msg.sender].userAddress == address(0), "User already exists");

        bytes32 uuid = keccak256(abi.encodePacked(msg.sender, block.timestamp));
        profiles[msg.sender].username = _username;
        profiles[msg.sender].name = _name;
        profiles[msg.sender].email = _email;
        profiles[msg.sender].userAddress = msg.sender;
        profiles[msg.sender].uuid = uuid;
        profiles[msg.sender].index = _index;
        profiles[msg.sender].userNumber = userCount;
        profiles[msg.sender].userPostCount = 1;
        usernameToAddress[_username] = msg.sender;
        userCount++;

        emit NewUser(msg.sender, _username, uuid);
    }

    //Create and Update User followers and followings Functions

    function follow(address _userToFollow) external {
        require(_userToFollow != address(0), "Invalid user address");
        require(profiles[_userToFollow].userAddress != address(0), "User does not exist");

        profiles[msg.sender].following.push(_userToFollow);
        profiles[_userToFollow].followers.push(msg.sender);

        emit Follow(msg.sender, _userToFollow);
    }

    function unfollow(address _userToUnfollow) external {
        require(_userToUnfollow != address(0), "Invalid user address");

        uint256 i;
        uint256 indexToRemove = type(uint256).max;
        for (i = 0; i < profiles[msg.sender].following.length; i++) {
            if (profiles[msg.sender].following[i] == _userToUnfollow) {
                indexToRemove = i;
                break;
            }
        }

        require(indexToRemove != type(uint256).max, "User is not being followed");

        profiles[msg.sender].following[indexToRemove] = profiles[msg.sender].following[profiles[msg.sender].following.length - 1];
        profiles[msg.sender].following.pop();

        uint256 j;
        indexToRemove = type(uint256).max;
        for (j = 0; j < profiles[_userToUnfollow].followers.length; j++) {
            if (profiles[_userToUnfollow].followers[j] == msg.sender) {
                indexToRemove = j;
                break;
            }
        }

        require(indexToRemove != type(uint256).max, "User is not a follower");

        profiles[_userToUnfollow].followers[indexToRemove] = profiles[_userToUnfollow].followers[profiles[_userToUnfollow].followers.length - 1];
        profiles[_userToUnfollow].followers.pop();

        emit Unfollow(msg.sender, _userToUnfollow);
    }

    //Create and Update Post Functions

    function createPost(string memory _content, bytes32[] memory _IPFSImagesRef) external {

        bytes32 id = keccak256(abi.encodePacked(msg.sender, block.timestamp));
        allPostsByNumber[postCount].id = id;
        allPostsByNumber[postCount].postNumber = postCount;
        allPostsByNumber[postCount].content = _content;
        allPostsByNumber[postCount].creatorAddress = msg.sender;
        allPostsByNumber[postCount].IPFSImagesRef = _IPFSImagesRef;
        allPostsByNumber[postCount].userPostNumber = profiles[msg.sender].userPostCount;
        allPostsByNumber[postCount].TimeStamp = block.timestamp;
        profiles[msg.sender].allUserPosts.push(postCount);
        postCount++;
        profiles[msg.sender].userPostCount++;

        emit NewUserPost(msg.sender, postCount, id);
    }

    //Return User Info Functions

    function getUserProfile(address _userAddress) external view returns (string memory, address[] memory, address[] memory, bytes32) {
        UserProfile memory profile = profiles[_userAddress];
        return (profile.username, profile.followers, profile.following, profile.uuid);
    }

    function getUserStruct(address _userAddress) external view returns (UserProfile memory) {
    return profiles[_userAddress];
    }

    function getUserAddressByUsername(string memory _username) external view returns (address) {
        return usernameToAddress[_username];
    }

    function getAllUserAddresses() external view returns (address[] memory) {
        address[] memory allUserAddresses = new address[](userCount);

        for (uint256 i = 0; i < userCount; i++) {
            address userAddress = users[i];
            allUserAddresses[i] = userAddress;
        }
        return allUserAddresses;
    }

   function getAllUserProfiles() external view returns (UserProfile[] memory) {
        UserProfile[] memory allProfiles = new UserProfile[](userCount);

        for (uint256 i = 0; i < userCount; i++) {
            address userAddress = users[i];
            allProfiles[i] = profiles[userAddress];
        }

        return allProfiles;
    }

    //Return User Followers and Followings info Functions

    function getUserFollowers(address _userAddress) external view returns (address[] memory) {
        return profiles[_userAddress].followers;
    }

    function getUserFollowing(address _userAddress) external view returns (address[] memory) {
        return profiles[_userAddress].following;
    }

    //Return Post Functions

    function getPostByNumber(uint256 _postNumber) external view returns (UserPost memory) {
        return allPostsByNumber[_postNumber];
    }

    function getUserPosts(address _userAddress) external view returns (UserPost[] memory) {
        uint256 userPostCount = profiles[_userAddress].userPostCount;
        UserPost[] memory userPosts = new UserPost[](userPostCount);

        for (uint256 i = 0; i < userPostCount; i++) {
            userPosts[i] = allPostsByNumber[profiles[_userAddress].allUserPosts[i]];
        }

        return userPosts;
    }

    function getAllPosts() external view returns (UserPost[] memory) {
        UserPost[] memory allPosts = new UserPost[](postCount - 1); 

        for (uint256 i = 1; i < postCount; i++) { 
            allPosts[i - 1] = allPostsByNumber[i];
        }
        return allPosts;
    }

    function getCurrentPostCount() external view returns (uint256) {
        return postCount - 1; 
    }

}
