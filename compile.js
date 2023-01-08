const solc = require('solc');
const fs = require('fs')


// console.log(fs.readFileSync('./SimpleStorage.sol','utf-8'))

const input = {
  language: 'Solidity',
  sources: {
    'SimpleStorage.sol': {
      content: fs.readFileSync('./SimpleStorage.sol','utf-8')
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log('output ==========>',JSON.stringify(output))

// `output` here contains the JSON output as specified in the documentation
for (var contractName in output.contracts['SimpleStorage.sol']) {
  fs.writeFileSync('SimpleStorage.bin',output.contracts['SimpleStorage.sol'][contractName].evm.bytecode.object)
  fs.writeFileSync('SimpleStorage.abi',JSON.stringify(output.contracts['SimpleStorage.sol'][contractName].abi))
}