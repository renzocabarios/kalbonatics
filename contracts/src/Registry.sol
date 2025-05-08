// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Registry {
    mapping(string => address) contracts;

    event SetContractEvent(address contractAddress, string contractName);

    function setContract(
        address contractAddress,
        string memory contractName
    ) public {
        contracts[contractName] = contractAddress;
        emit SetContractEvent(contractAddress, contractName);
    }

    function getContractAddress(
        string memory contractName
    ) public view returns (address) {
        return contracts[contractName];
    }
}