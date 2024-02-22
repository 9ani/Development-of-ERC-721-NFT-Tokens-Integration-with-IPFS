require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      chainId: 11155111,
      url: 'quicknode_url',
      accounts: [
        'Private_key',
      ],
    },
  },
  paths: {
    artifacts: "./artifacts",
  },
};