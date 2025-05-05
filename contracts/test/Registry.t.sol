// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Registry.sol";

contract RegistryTest is Test {
    Registry registry;

    function setUp() public {
        registry = new Registry();
    }

    function testSetAndGetContract() public {
        string memory name = "MyContract";
        address contractAddr = address(0x123);

        registry.setContract(contractAddr, name);
        address retrieved = registry.getContractAddress(name);

        assertEq(retrieved, contractAddr);
    }

    function testEmitSetContractEvent() public {
        string memory name = "AnotherContract";
        address contractAddr = address(0x456);

        vm.expectEmit(true, true, false, false);
        emit SetContractEvent(contractAddr, name);

        registry.setContract(contractAddr, name);
    }

    event SetContractEvent(address contractAddress, string contractName);
}
