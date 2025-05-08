// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./interfaces/IRegistry.sol";

// TODO: Add owner only
contract Registry is IRegistry {
    mapping(string => address) contracts;

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
