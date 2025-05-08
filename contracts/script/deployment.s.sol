// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Registry} from "../src/Registry.sol";
import {KalboToken} from "../src/KalboToken.sol";

contract DeploymentScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        Registry registry = new Registry();
        console.log("Registry Address:", address(registry));

        KalboToken kalboToken = new KalboToken();
        console.log("KalboToken Address:", address(kalboToken));

        vm.stopBroadcast();
    }
}
