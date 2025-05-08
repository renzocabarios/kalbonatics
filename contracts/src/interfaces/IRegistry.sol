// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface IRegistry {
    event SetContractEvent(address contractAddress, string contractName);

    function setContract(
        address contractAddress,
        string memory contractName
    ) external;

    function getContractAddress(
        string memory contractName
    ) external view returns (address);
}
