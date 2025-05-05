// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KalboToken is ERC20 {
    constructor() ERC20("Kalbo", "KALBO") {
        _mint(msg.sender, 1_000_000_000 * 10 ** decimals());
    }
 
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber; 
    }

    function increment() public {
        number++;
    }
}
