// SPDX-License-Identifier: MIT

pragma solidity >=0.8.11;

contract WizzMainContract {
    address public Owner;
    address[] public users;

    uint256 public userCount;
    uint256 public projectCount;
    uint256 public postCount;

    mapping(address => UserProfile) public profiles;
    mapping(string => address) public usernameToAddress;
    mapping(address => mapping(address => UserProfile)) public followers;
    mapping(address => mapping(address => UserProfile)) public following;
    mapping(address => UserPost[]) public posts;

    constructor() {
        Owner = msg.sender;
    }

    struct UserProfile {
        uint256 userNumber;
        string username;
        string name;
        string email;
        string bio;
        string profileImageRef;
        string bannerImageRef;
        address userAddress;
        uint256 timeCreated;
        uint256 followerCount;
        uint256 followingCount;
        uint256 postCount;
        address[] followers;
        address[] following;
    }

    struct AllUserStruck {
        address userAddress;
        string name;
        string username;
        uint userNumber;
        string bio;
        uint postCount;
        uint followerCount;
        uint followingCount;
    }

    AllUserStruck[] getAllUsers;

    struct UserPost {
        string postType;
        uint256 postNumber;
        string content;
        address creatorAddress;
        uint256 TimeStamp;
        string[] IPFSImagesRef;
        address[] likedBy;
    }

    // Check if message sender has a created profile
    modifier senderHasProfile() {
        require(
            profiles[msg.sender].userAddress != address(0x0),
            "ERROR: <Must create a profile to perform this action>"
        );
        _;
    }

    // Check if a specified address has created a profile
    modifier profileExists(address _address) {
        require(
            profiles[_address].userAddress != address(0x0),
            "ERROR: <Profile does not exist>"
        );
        _;
    }

    // Check if a specified username has a profile
    modifier profileExistsByUsername(string memory _username) {
        require(
            usernameToAddress[_username] != address(0x0),
            "ERROR <Username does not exist>"
        );
        _;
    }

    // Check that the message sender is not specifying an address that is itself
    modifier notSelf(address _address) {
        require(
            msg.sender != _address,
            "ERROR <You cannot follow/unfollow yourself"
        );
        _;
    }

    // Check that the input is not empty
    modifier nonEmptyInput(string memory _input) {
        require(
            keccak256(abi.encodePacked(_input)) !=
                keccak256(abi.encodePacked("")),
            "ERROR: <Input cannot be empty>"
        );
        _;
    }

    event NewUser(address indexed userAddress, string username);
    event Follow(address indexed follower, address indexed following);
    event Unfollow(address indexed follower, address indexed unfollowing);
    event NewUserPost(
        address indexed creatorAddress,
        uint256 indexed postCount
    );

    //Create and Update User Info Functions
    function createUser(
        string memory _username,
        string memory _name,
        string memory _email,
        string memory _bio,
        string memory _bannerImageRef,
        string memory _profileImageRef
    ) external nonEmptyInput(_username) nonEmptyInput(_name) {
        userCount++;
        require(
            profiles[msg.sender].userAddress == address(0x0),
            "ERROR: <You have already created a profile>"
        );
        require(
            usernameToAddress[_username] == address(0x0),
            "ERROR: <Username taken>"
        );

        profiles[msg.sender] = UserProfile({
            username: _username,
            name: _name,
            email: _email,
            bio: _bio,
            profileImageRef: _profileImageRef,
            bannerImageRef: _bannerImageRef,
            userAddress: msg.sender,
            userNumber: userCount,
            postCount: 0,
            followerCount: 0,
            followingCount: 0,
            timeCreated: block.timestamp,
            followers: new address[](0x0),
            following: new address[](0x0)
        });

        usernameToAddress[_username] = msg.sender;
        users.push(msg.sender);
        getAllUsers.push(
            AllUserStruck(
                msg.sender,
                _name,
                _username,
                userCount,
                _bio,
                0,
                0,
                0
            )
        );

        emit NewUser(msg.sender, _username);
    }

    //Create and Update User followers and followings Functions

    function follow(address _userToFollow)
        external
        senderHasProfile
        profileExists(_userToFollow)
        notSelf(_userToFollow)
    {
        require(
            following[msg.sender][_userToFollow].userAddress == address(0x0),
            "ERROR: <You already follow this profile>"
        );

        // Add entry to "followers" and "following" mappings
        followers[_userToFollow][msg.sender] = profiles[msg.sender];
        following[msg.sender][_userToFollow] = profiles[_userToFollow];

        // Add element to "followers" and "following" arrays in both Profile objects
        profiles[_userToFollow].followers.push(msg.sender);
        profiles[msg.sender].following.push(_userToFollow);

        // Increment "followerCount" and "followingCount" in both Profile objects
        profiles[_userToFollow].followerCount++;
        profiles[msg.sender].followingCount++;

        emit Follow(msg.sender, _userToFollow);
    }

    function unfollow(address _userToUnfollow)
        external
        senderHasProfile
        profileExists(_userToUnfollow)
        notSelf(_userToUnfollow)
    {
        require(
            following[msg.sender][_userToUnfollow].userAddress != address(0x0),
            "ERROR: <You do not follow this profile>"
        );

        // Delete entry from "followers" and "following" mappings
        delete followers[_userToUnfollow][msg.sender];
        delete following[msg.sender][_userToUnfollow];

        // Delete element from "followers" array in Profile object and decrement followerCount
        for (uint256 i = 0; i < profiles[_userToUnfollow].followerCount; i++) {
            if (profiles[_userToUnfollow].followers[i] == msg.sender) {
                delete profiles[_userToUnfollow].followers[i];
                profiles[_userToUnfollow].followerCount--;
                break;
            }
        }

        // Delete element from "following" array in Profile object and decrement followingCount
        for (uint256 i = 0; i < profiles[msg.sender].followingCount; i++) {
            if (profiles[msg.sender].following[i] == _userToUnfollow) {
                delete profiles[msg.sender].following[i];
                profiles[msg.sender].followingCount--;
                break;
            }
        }

        emit Unfollow(msg.sender, _userToUnfollow);
    }

    //Create and Update Post Functions

    // function createPost(string memory _content, bytes32[] memory _IPFSImagesRef) external {

    //     bytes32 id = keccak256(abi.encodePacked(msg.sender, block.timestamp));
    //     allPostsByNumber[postCount].id = id;
    //     allPostsByNumber[postCount].postNumber = postCount;
    //     allPostsByNumber[postCount].content = _content;
    //     allPostsByNumber[postCount].creatorAddress = msg.sender;
    //     allPostsByNumber[postCount].IPFSImagesRef = _IPFSImagesRef;
    //     allPostsByNumber[postCount].userPostNumber = profiles[msg.sender].userPostCount;
    //     allPostsByNumber[postCount].TimeStamp = block.timestamp;
    //     profiles[msg.sender].allUserPosts.push(postCount);
    //     postCount++;
    //     profiles[msg.sender].userPostCount++;

    //     emit NewUserPost(msg.sender, postCount, id);
    // }

    //Return User Info Functions

    function getUserCount() external view returns (uint256) {
        return users.length;
    }

    function getAllAddresses() external view returns (address[] memory) {
        return users;
    }

    function checkAccount(address _userAddress) external view returns (bool) {
        if (profiles[_userAddress].userAddress == address(0)) {
            return false;
        } else {
            return true;
        }
    }

    function getUserStructByUsername(string memory _username)
        external
        view
        profileExistsByUsername(_username)
        returns (UserProfile memory)
    {
        address userAddress = usernameToAddress[_username];
        return profiles[userAddress];
    }

    function getUsernameByUserAddress(address _address)
        public
        view
        profileExists(_address)
        returns (string memory)
    {
        return profiles[_address].username;
    }

    function getAllUserProfiles() external view returns (UserProfile[] memory) {
        UserProfile[] memory allProfiles = new UserProfile[](userCount);

        for (uint256 i = 0; i < users.length; i++) {
            address userAddress = users[i];
            allProfiles[i] = profiles[userAddress];
        }

        return allProfiles;
    }

    //Return User Followers and Followings info Functions

    // Get all Followers and Followings of a specific user by username
    function getUserFollowersByUsername(string memory _username)
        external
        view
        profileExistsByUsername(_username)
        returns (address[] memory)
    {
        address userAddress = usernameToAddress[_username];
        return profiles[userAddress].followers;
    }

    function getUserFollowingByUsername(string memory _username)
        external
        view
        profileExistsByUsername(_username)
        returns (address[] memory)
    {
        address userAddress = usernameToAddress[_username];
        return profiles[userAddress].following;
    }

    // Get all Followers and Followings of a specific user by userAddreaa

    // function getUserFollowers(address _address) external view profileExists(_address) returns(address[] memory) {
    //     return profiles[_address].followers;
    // }

    // function getUserFollowing(address _address) external view profileExists(_address) returns (address[] memory) {
    //     return profiles[_address].following;
    // }

    //Return Post Functions

    // function getPostByNumber(uint256 _postNumber) external view returns (UserPost memory) {
    //     return allPostsByNumber[_postNumber];
    // }

    // function getUserPosts(address _userAddress) external view returns (UserPost[] memory) {
    //     uint256 userPostCount = profiles[_userAddress].userPostCount;
    //     UserPost[] memory userPosts = new UserPost[](userPostCount);

    //     for (uint256 i = 0; i < userPostCount; i++) {
    //         userPosts[i] = allPostsByNumber[profiles[_userAddress].allUserPosts[i]];
    //     }

    //     return userPosts;
    // }

    // function getAllPosts() external view returns (UserPost[] memory) {
    //     UserPost[] memory allPosts = new UserPost[](postCount - 1);

    //     for (uint256 i = 1; i < postCount; i++) {
    //         allPosts[i - 1] = allPostsByNumber[i];
    //     }
    //     return allPosts;
    // }

    // function getCurrentPostCount() external view returns (uint256) {
    //     return postCount - 1;
    // }
}
