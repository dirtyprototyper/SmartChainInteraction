# SmartChainInteraction
To return the token balance of specific address for a given ContractAddress

$SWTH Token Contract: `0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c`
Addresses: 0x123d475e13aa54a43a7421d94caa4459da021c77, 0x0020c5222a24e4a96b720c06b803fb8d34adc0af

Requirement to be done in Typescript and optionally with ethers.js

To see how it works in typescript:

1. Please run "npm i" to install the relevant packages: 
@ethers-ancillary/bsc
ethers

2. Change "BscScan_Api_Key" to your BscScan Api key at line 25

3. Run in the terminal "ts-node main.ts" and you should be able to see the result
_____________________________________________________________________________________________________________________________________________
Optionally for python(Much easier setup and less complex as there is no ethers.js):

1. Please run "pip install bscscan-python" to install the package

2.Change "BscScan_Api_Key" to your BscScan Api key at line 25

3. "python main.py" and you should be able to see the result
