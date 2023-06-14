import { ethers } from "hardhat";
import { NumberGuessingGame__factory } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const wallet = new ethers.Wallet(process.env.DEPLOYER_PRIVATE_KEY ?? "");
  const provider = new ethers.providers.InfuraProvider(
    "sepolia",
    process.env.INFURA_API_SECRET
  );

  const lastBlock = await provider?.getBlock("latest");
  console.log(`Connected to the blocknumber ${lastBlock?.number}`);

  const signer = wallet.connect(provider);

  //Deploy VoteContract
  const myVotecontractFactory = new NumberGuessingGame__factory(signer);
  const myVotecontract = await myVotecontractFactory.deploy();
  const deployVoteContractTxReceipt =
    await myVotecontract.deployTransaction.wait();
  console.log(
    `The contract NumberGuessingGame was deployed at address ${myVotecontract.address} at the block ${deployVoteContractTxReceipt.blockNumber} \n`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
