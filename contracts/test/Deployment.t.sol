// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import {Registry} from "../src/Registry.sol";
import {KalboToken} from "../src/KalboToken.sol";
import {Kalbonatics} from "../src/Kalbonatics.sol";
import {Swap} from "../src/Swap.sol";
import {Treasury} from "../src/Treasury.sol";

contract DeploymentTest is Test {
    Registry registry;
    KalboToken kalboToken;
    Kalbonatics kalbonatics;
    Swap swap;
    Treasury treasury;

    function setUp() public {
        registry = new Registry();
        kalboToken = new KalboToken();
        kalbonatics = new Kalbonatics();
        swap = new Swap();
        treasury = new Treasury();
    }

    function testSetContracts() public {
        registry.setContract(address(registry), "Registry");
        assertEq(registry.getContractAddress("Registry"), address(registry));

        registry.setContract(address(kalboToken), "KalboToken");

        assertEq(
            registry.getContractAddress("KalboToken"),
            address(kalboToken)
        );

        registry.setContract(address(kalbonatics), "Kalbonatics");

        assertEq(
            registry.getContractAddress("Kalbonatics"),
            address(kalbonatics)
        );

        registry.setContract(address(swap), "Swap");
        assertEq(registry.getContractAddress("Swap"), address(swap));

        registry.setContract(address(treasury), "Treasury");
        assertEq(registry.getContractAddress("Treasury"), address(treasury));
    }

    function testSetRegistry() public {
        registry.setContract(address(registry), "Registry");
        registry.setContract(address(kalboToken), "KalboToken");
        registry.setContract(address(kalbonatics), "Kalbonatics");
        registry.setContract(address(swap), "Swap");
        registry.setContract(address(treasury), "Treasury");

        kalbonatics.setRegistry(address(registry));
        assertEq(address(registry), kalbonatics.getRegistry());

        treasury.setRegistry(address(registry));
        assertEq(address(registry), treasury.getRegistry());
    }
}
