const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const ganache = require('ganache-cli');
const provider =  new HDWalletProvider(
  "YOUR MNEUMONIC",
  'https://rinkeby.infura.io/v3/YOU INFURA ID RINKEBY'
);

// const web3 = new Web3(provider);
const web3 = new Web3(ganache.provider());

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send({from: accounts[0], gas: '1000000' });

  console.log("contract deployed to ",  result.options.address);
}

deploy();