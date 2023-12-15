import { ethers } from "hardhat"
import { expect, assert } from "chai"

describe("SimpleStorage", function () {
 let simpleStorage
 let simpleStorageFactory

 beforeEach(async function () {
  simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  simpleStorage = await simpleStorageFactory.deploy()
 })

 it("Should start with a favourite number of 0", async function () {
  const currentValue = await simpleStorage.retrieve()
  const expectedValue = "0"
  assert.equal(currentValue.toString(), expectedValue)
 })

 it("Should update favourite number when we call store", async function () {
  const newValue = "7"
  const transactionResponse = await simpleStorage.store(newValue)
  await transactionResponse.wait(1)
  const actualValue = await simpleStorage.retrieve()
  assert.equal(actualValue.toString(), newValue)
 })

 it("Should add person when addPerson is called", async function () {
  const personName = "Kowalski Skipper"
  const favouriteNumber = "7"
  const transactionResponse = await simpleStorage.addPerson(
   personName,
   favouriteNumber,
  )
  await transactionResponse.wait(1)
  const person = await simpleStorage.people(0)
  assert.equal(person.favoriteNumber.toString(), favouriteNumber)
  assert.equal(person.name, personName)
 })
})
