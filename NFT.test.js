const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("YourNFT", function () {
  let YourNFT;
  let yourNFT;

  beforeEach(async () => {
    YourNFT = await ethers.getContractFactory("YourNFT");
    yourNFT = await YourNFT.deploy();
    await yourNFT.deployed();
  });

  it("Should mint an NFT and retrieve its tokenURI", async function () {
    const tokenId = 1;
    const tokenURI = "ipfs://example";

    await yourNFT.mint("0xAddress", tokenId, tokenURI);
    const retrievedTokenURI = await yourNFT.tokenURI(tokenId);

    expect(retrievedTokenURI).to.equal("https://ipfs.io/ipfs/ipfs://example");
  });

  it("Should not allow non-owners to mint", async function () {
    await expect(yourNFT.connect(accounts[1]).mint("0xAddress", 1, "ipfs://example"))
      .to.be.revertedWith("Ownable: caller is not the owner");
  });

});
