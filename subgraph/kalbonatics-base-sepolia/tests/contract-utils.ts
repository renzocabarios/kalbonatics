import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { SetContractEvent } from "../generated/Contract/Contract"

export function createSetContractEventEvent(
  contractAddress: Address,
  contractName: string
): SetContractEvent {
  let setContractEventEvent = changetype<SetContractEvent>(newMockEvent())

  setContractEventEvent.parameters = new Array()

  setContractEventEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  setContractEventEvent.parameters.push(
    new ethereum.EventParam(
      "contractName",
      ethereum.Value.fromString(contractName)
    )
  )

  return setContractEventEvent
}
