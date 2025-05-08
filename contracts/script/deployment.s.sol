// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Registry} from "../src/Registry.sol";
import {KalboToken} from "../src/KalboToken.sol";
import {Kalbonatics} from "../src/Kalbonatics.sol";
import {Swap} from "../src/Swap.sol";
import {Treasury} from "../src/Treasury.sol";

contract DeploymentScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        Registry registry = new Registry();
        console.log("Registry Address:", address(registry));

        KalboToken kalboToken = new KalboToken();
        console.log("KalboToken Address:", address(kalboToken));

        Kalbonatics kalbonatics = new Kalbonatics();
        console.log("Kalbonatics Address:", address(kalbonatics));

        Swap swap = new Swap();
        console.log("Swap Address:", address(swap));

        Treasury treasury = new Treasury();
        console.log("Treasury Address:", address(treasury));

        vm.stopBroadcast();
    }
}
