const { expect } = require("chai");

describe("honorary", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Honorary = await hre.ethers.getContractFactory("Honorary");
    const honorary = await Honorary.deploy();
    await honorary.deployed();

    const newItemTx = await honorary.newItem("/1");

    // wait until the transaction is mined
    await newItemTx.wait();
    console.log(await honorary.tokenURI(0));

    expect(await honorary.tokenURI(0)).to.equal("/1");
  });
});
