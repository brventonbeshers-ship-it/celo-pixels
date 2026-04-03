const hre = require("hardhat");

async function main() {
  const CeloPixels = await hre.ethers.getContractFactory("CeloPixels");
  console.log("Deploying CeloPixels to Celo mainnet...");
  const contract = await CeloPixels.deploy();
  await contract.waitForDeployment();
  const address = await contract.getAddress();
  console.log(`CeloPixels deployed to: ${address}`);

  console.log("Waiting for confirmations...");
  await new Promise((r) => setTimeout(r, 30000));

  console.log("Verifying on CeloScan...");
  try {
    await hre.run("verify:verify", { address, constructorArguments: [] });
    console.log("Verified!");
  } catch (e) {
    console.log("Verification failed:", e.message);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
