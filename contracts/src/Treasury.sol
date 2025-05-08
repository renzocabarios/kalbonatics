// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Registry.sol";

contract Treasury {
    event UserBetEvent(uint amount, string guess, address user);
    event SetRewardsEvent(uint amount, address user);

    address public owner;
    Registry registry;

    mapping(address => uint) userRewards;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function setRegistry(address registryAddress) public onlyOwner {
        registry = Registry(registryAddress);
    }

    function addToTreasury(uint amount, string memory guess) public onlyOwner {
        emit UserBetEvent(amount, guess, msg.sender);
    }
}
