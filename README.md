# Lesson 6 HardHat Simple Storage

Commands needed by project:
yarn add --dev hardhat
yarn hardhat init
yarn add --dev prettier 
yarn add --dev prettier-plugin-solidity
yarn add --dev dotenv
yarn add --dev @nomiclabs/hardhat-etherscan
yarn add hardhat-gas-reporter
yarn add --dev solidity-coverage

compile:
yarn hardhat compile (compiles all files from contracts folder)

Running:
yarn hardhat run scripts/deploy.ts
yarn hardhat run scripts/deploy.ts --network hardhat ///// run locally on hardhat network
yarn hardhat run scripts/deploy.ts --network sepolia ///// run on sepolia - defined in hardhat.config.js
yarn hardhat run scripts/deploy.ts --network localhost ///// defined to use local hardhat
