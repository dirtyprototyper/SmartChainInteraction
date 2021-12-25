/*
The challenge is to retrieve the specified holders of $SWTH token on the Binance Smart Chain network.

$SWTH Token Contract: `0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c`

address: 
0x123d475e13aa54a43a7421d94caa4459da021c77
0x0020c5222a24e4a96b720c06b803fb8d34adc0af
0xfe808b079187cc460f47374580f5fb47c82b87a5

Note: To be done in Typescript and optionally using the library ethers.js
*/

//using etherjs
const { ethers } = require("ethers");

//using Bscscan Provider: https://github.com/ethers-io/ancillary-bsc
//so that i can use bscscanner as a provider for etherjs
import { BscscanProvider } from "@ethers-ancillary/bsc";

//the network is either bsc-mainnet | bsc-testnet. (mainnet if got apikey, testnet for testing)
//https://github.com/ethers-io/ancillary-bsc/blob/main/src.ts/bscscan-provider.ts
const network = "bsc-mainnet";

const provider = new BscscanProvider(network, "BscScan_Api_Key");

const abi = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function transfer(address to, uint amount) returns (boolean)",
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

//contract address
const contractaddress = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";

const erc20 = new ethers.Contract(contractaddress, abi, provider);

async function returnmydata() {
  let address1 = await erc20.balanceOf(
    "0x123d475e13aa54a43a7421d94caa4459da021c77"
  );
  console.log(address1.toString());

  let address2 = await erc20.balanceOf(
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af"
  );
  console.log(address2.toString());

  let address3 = await erc20.balanceOf(
    "0xfe808b079187cc460f47374580f5fb47c82b87a5"
  );
  console.log(address3.toString());
}

returnmydata();
