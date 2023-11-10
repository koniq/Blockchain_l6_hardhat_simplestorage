const { ethers, run, network } = require("hardhat")

async function main() {
 const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
 console.log("Deploying contract")

 const simpleStorage = await SimpleStorageFactory.deploy()
 console.log(`Deployed contract to '${simpleStorage.target}'`)
 console.log(network.config)
 if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
  await simpleStorage.deploymentTransaction().wait(6) // wait 6 blocks before verifiation
  await verify(simpleStorage.target, [])
 }
 const currentValue = await simpleStorage.retrieve()
 console.log(`Current Value is : ${currentValue}`)
 console.log(`Trying to store 50`)

 const transactionResponse = await simpleStorage.store("50")
 await transactionResponse.wait(1)
 const updatedValue = await simpleStorage.retrieve()
 console.log(`Updated Value is : ${updatedValue}`)
}

async function verify(contractAddress, args) {
 console.log(`Veryfying '${contractAddress}' contract...`)
 try {
  await run("verify:verify", {
   address: contractAddress,
   constructorArguments: args,
  })
 } catch (e) {
  if (e.message.toLowerCase().includes("already verified")) {
   console.log("Already verified")
  } else {
   console.log("Error while verifing : " + e)
  }
 }
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
 .then(() => process.exit(0))
 .catch((error) => {
  console.error(error)
  process.exit(1)
 })
