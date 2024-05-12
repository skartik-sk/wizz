export const deployementAddress = "0xb97A208b91508213E8d9c489Edc2C20b3546990a"

export const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bannerImageRef",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_profileImageRef",
				"type": "string"
			}
		],
		"name": "createUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userToFollow",
				"type": "address"
			}
		],
		"name": "follow",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "follower",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "following",
				"type": "address"
			}
		],
		"name": "Follow",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "NewUser",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "creatorAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "postCount",
				"type": "uint256"
			}
		],
		"name": "NewUserPost",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userToUnfollow",
				"type": "address"
			}
		],
		"name": "unfollow",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "follower",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "unfollowing",
				"type": "address"
			}
		],
		"name": "Unfollow",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "checkAccount",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "followers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "userNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "profileImageRef",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bannerImageRef",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timeCreated",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "followerCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "followingCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "postCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "following",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "userNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "profileImageRef",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bannerImageRef",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timeCreated",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "followerCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "followingCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "postCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllAddresses",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllUserProfiles",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "userNumber",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "username",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bio",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "profileImageRef",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bannerImageRef",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "timeCreated",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "followerCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "followingCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "postCount",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "followers",
						"type": "address[]"
					},
					{
						"internalType": "address[]",
						"name": "following",
						"type": "address[]"
					}
				],
				"internalType": "struct WizzMainContract.UserProfile[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			}
		],
		"name": "getUserFollowersByUsername",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			}
		],
		"name": "getUserFollowingByUsername",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getUsernameByUserAddress",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			}
		],
		"name": "getUserStructByUsername",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "userNumber",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "username",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bio",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "profileImageRef",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bannerImageRef",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "timeCreated",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "followerCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "followingCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "postCount",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "followers",
						"type": "address[]"
					},
					{
						"internalType": "address[]",
						"name": "following",
						"type": "address[]"
					}
				],
				"internalType": "struct WizzMainContract.UserProfile",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "postCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "posts",
		"outputs": [
			{
				"internalType": "string",
				"name": "postType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "postNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "creatorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "TimeStamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "profiles",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "userNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "profileImageRef",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bannerImageRef",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timeCreated",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "followerCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "followingCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "postCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "projectCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "usernameToAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]