require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomicfoundation/hardhat-verify")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")

const SEPOLIA_RPC_URL =
 process.env.SEPOLIA_RPC_URL || "SEPOLIA_RPC_URL does not exist in context"
const PRIVATE_KEY =
 process.env.PRIVATE_KEY || "PRIVATE_KEY does not exist in context"
const ETHERSCAN_API_KEY =
 process.env.ETHERSCAN_API_KEY || "ETHERSCAN_API_KEY does not exist in context"
const COINMARKETCAP_API_KEY =
 process.env.COINMARKETCAP_API_KEY ||
 "COINMARKETCAP_API_KEY does not exist in context"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 defaultNetwork: "hardhat",
 networks: {
  sepolia: {
   url: SEPOLIA_RPC_URL,
   accounts: [PRIVATE_KEY],
   chainId: 11155111,
  },
  localhost: {
   url: "http://127.0.0.1:8545/",
   chainId: 31337,
  },
 },
 solidity: "0.8.8",
 etherscan: {
  apiKey: ETHERSCAN_API_KEY,
 },
 sourcify: {
  enabled: true,
 },
 gasReporter: {
  enabled: false,
  outputFile: "gas-report.txt",
  noColors: true,
  currency: "USD",
  coinmarketcap: COINMARKETCAP_API_KEY,
 },
}
