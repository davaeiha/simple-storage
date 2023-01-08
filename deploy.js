const ethers = require('ethers');
const fs = require('fs-extra')

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider('http://0.0.0.0:8545');
    const wallet = new ethers.Wallet("d0290c9fed65b85a201ed3df09ec80d67ce03b3f7e0d11e3078cc77e074ff4ae",provider);
    // console.log(wallet)
    const abi = fs.readFileSync('./SimpleStorage.abi','utf-8');
    const bin = fs.readFileSync('./SimpleStorage.bin','utf-8');

    const contractFactory = new ethers.ContractFactory(abi,bin,wallet);
    console.log('deploying please wait...');
    const contract = await contractFactory.deploy();
    console.log(contract);

}


main().then((res)=>{
    process.exit(0)
}).catch((err)=>{
    console.log(err);
    process.exit(1)
})