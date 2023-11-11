const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
 let simpleStorage
 let simpleStorageFactory

 beforeEach(async function () {
  simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  simpleStorage = await simpleStorageFactory.deploy()
 })

 it("Should start with a favoutire number of 0", async function () {
  const currentValue = await simpleStorage.retrieve()
  const expectedValue = "0"
  assert.equal(currentValue.toString(), expectedValue)
 })

 it("Should update favourite number when we call store", async function () {
  const newValue = "7"
  const transactionResponse = await simpleStorage.store(newValue)
  await transactionResponse.await(1)
  const actualValue = await simpleStorage.retrieve()
  assert.equal(actualValue.toString(), newValue)
 })
})