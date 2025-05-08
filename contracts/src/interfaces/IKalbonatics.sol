// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IKalbonatics {
    event UserBetEvent(uint amount, string guess, address user);
    event SetRewardsEvent(uint amount, address user);

    function setRegistry(address registryAddress) external ;

    function bet(uint amount, string calldata guess) external ;

    function setRewards(uint amount, address user) external ;

    function isValid(string calldata input) external pure  returns (bool);
}
