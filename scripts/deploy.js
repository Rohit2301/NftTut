const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed;
  console.log("NFT contract deployed to", nftContract.address);

  // Call the function.
  let txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();

  // Mint another NFT for fun.
  txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();
  console.log("Minted NFT #2");
};

const run = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log("error is :", error);
    process.exit(1);
  }
};

run();
