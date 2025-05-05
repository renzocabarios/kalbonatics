// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Treasury {
    event UserBetEvent(uint amount, string guess, address user);
    event SetRewardsEvent(uint amount, address user);

    address public owner;

    mapping(address => uint) userRewards;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function bet(uint amount, string memory guess) public {
        require(isValid(guess), "Input must be 'HEADS' or 'TAILS'");
        emit UserBetEvent(amount, guess, msg.sender);
    }

    function setRewards(uint amount, address user) public onlyOwner {
        userRewards[user] = amount;
        emit SetRewardsEvent(amount, user);
    }

    function isValid(string memory input) public pure returns (bool) {
        bytes32 inputHash = keccak256(abi.encodePacked(input));
        bytes32 headsHash = keccak256(abi.encodePacked("HEADS"));
        bytes32 tailsHash = keccak256(abi.encodePacked("TAILS"));

        return inputHash == headsHash || inputHash == tailsHash;
    }
}
