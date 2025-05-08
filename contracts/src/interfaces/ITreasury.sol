// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface ITreasury {
    event UserBetEvent(uint amount, address user);
    event SetRewardsEvent(uint amount, address user);

    function setRegistry(address registryAddress) external;

    function addToTreasury(uint amount) external;
}
