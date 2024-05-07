export const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_content",
				"type": "string"
			},
			{
				"internalType": "bytes32[]",
				"name": "_IPFSImagesRef",
				"type": "bytes32[]"
			}
		],
		"name": "createPost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
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
				"name": "_index",
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
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "uuid",
				"type": "bytes32"
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
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allPostsByNumber",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "postNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "userPostNumber",
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
		"inputs": [],
		"name": "getAllPosts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "id",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "postNumber",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "userPostNumber",
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
					},
					{
						"internalType": "bytes32[]",
						"name": "IPFSImagesRef",
						"type": "bytes32[]"
					},
					{
						"internalType": "address[]",
						"name": "likedBy",
						"type": "address[]"
					}
				],
				"internalType": "struct WizzMainContract.UserPost[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllUserAddresses",
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
						"internalType": "bytes32",
						"name": "uuid",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "userNumber",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "userRefId",
						"type": "string"
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
						"name": "index",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
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
					},
					{
						"internalType": "uint256",
						"name": "userPostCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "allUserPosts",
						"type": "uint256[]"
					},
					{
						"internalType": "bytes32[]",
						"name": "Projects",
						"type": "bytes32[]"
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
		"name": "getCurrentPostCount",
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
				"internalType": "uint256",
				"name": "_postNumber",
				"type": "uint256"
			}
		],
		"name": "getPostByNumber",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "id",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "postNumber",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "userPostNumber",
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
					},
					{
						"internalType": "bytes32[]",
						"name": "IPFSImagesRef",
						"type": "bytes32[]"
					},
					{
						"internalType": "address[]",
						"name": "likedBy",
						"type": "address[]"
					}
				],
				"internalType": "struct WizzMainContract.UserPost",
				"name": "",
				"type": "tuple"
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
		"name": "getUserAddressByUsername",
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
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUserFollowers",
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
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUserFollowing",
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
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUserPosts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "id",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "postNumber",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "userPostNumber",
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
					},
					{
						"internalType": "bytes32[]",
						"name": "IPFSImagesRef",
						"type": "bytes32[]"
					},
					{
						"internalType": "address[]",
						"name": "likedBy",
						"type": "address[]"
					}
				],
				"internalType": "struct WizzMainContract.UserPost[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUserProfile",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUserStruct",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "uuid",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "userNumber",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "userRefId",
						"type": "string"
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
						"name": "index",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
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
					},
					{
						"internalType": "uint256",
						"name": "userPostCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "allUserPosts",
						"type": "uint256[]"
					},
					{
						"internalType": "bytes32[]",
						"name": "Projects",
						"type": "bytes32[]"
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
			}
		],
		"name": "profiles",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "uuid",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "userNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "userRefId",
				"type": "string"
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
				"name": "index",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "userPostCount",
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