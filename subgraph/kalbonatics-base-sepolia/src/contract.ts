import { SetContractEvent as SetContractEventEvent } from "../generated/Contract/Contract"
import { SetContractEvent } from "../generated/schema"

export function handleSetContractEvent(event: SetContractEventEvent): void {
  let entity = new SetContractEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.params.contractAddress
  entity.contractName = event.params.contractName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
