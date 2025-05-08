// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Registry.sol";
import "./interfaces/ITreasury.sol";

contract Treasury is ITreasury {
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

    function getRegistry() public view returns (address) {
        return address(registry);
    }

    function addToTreasury(uint amount) public {
        address kalboTokenAddress = registry.getContractAddress("KalboToken");

        ERC20 kalboToken = ERC20(kalboTokenAddress);
        kalboToken.transferFrom(msg.sender, address(this), amount);
        emit UserBetEvent(amount, msg.sender);
    }
}
