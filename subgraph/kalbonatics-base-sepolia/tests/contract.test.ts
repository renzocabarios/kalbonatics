import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { SetContractEvent } from "../generated/schema"
import { SetContractEvent as SetContractEventEvent } from "../generated/Contract/Contract"
import { handleSetContractEvent } from "../src/contract"
import { createSetContractEventEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let contractAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let contractName = "Example string value"
    let newSetContractEventEvent = createSetContractEventEvent(
      contractAddress,
      contractName
    )
    handleSetContractEvent(newSetContractEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("SetContractEvent created and stored", () => {
    assert.entityCount("SetContractEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "SetContractEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contractAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "SetContractEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contractName",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
