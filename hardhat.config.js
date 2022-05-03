require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gasPrice: 55000000000, // 55 gwei
    },
    mainnet: {
      url: process.env.MAINNET_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gasPrice: 55000000000, // 55 gwei
    },
    mumbai: {
      url: process.env.MUMBAI_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    polygon: {
      url: process.env.POLYGON_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAN_API_KEY,
    }
  }
};