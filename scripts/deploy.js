// scripts/deploy.js
async function main() {
    const YourNFT = await ethers.getContractFactory("YourNFT");
    const yourNFT = await YourNFT.deploy();
  
    await yourNFT.deployed();
  
    console.log("YourNFT deployed to:", yourNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  