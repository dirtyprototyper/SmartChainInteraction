#https://github.com/pcko1/bscscan-python

#required dependency for python:
#pip install bscscan-python

'''
contract address:
0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c

address:
0x123d475e13aa54a43a7421d94caa4459da021c77,0x0020C5222A24e4a96b720C06B803fB8D34ADc0Af, 0xfe808b079187cc460f47374580f5fb47c82b87a5
'''

import asyncio
from bscscan import BscScan

#API key from BSC Scan
#https://bscscan.com/login
YOUR_API_KEY = "BscScan_Api_Key"



async def main(): 
  async with BscScan(YOUR_API_KEY) as bsc:

    print(await bsc.get_acc_balance_by_token_contract_address(contract_address="0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c",address= "0x123d475e13aa54a43a7421d94caa4459da021c77") )
    print(await bsc.get_acc_balance_by_token_contract_address(contract_address="0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c",address= "0x0020c5222a24e4a96b720c06b803fb8d34adc0af") )
    print(await bsc.get_acc_balance_by_token_contract_address(contract_address="0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c",address= "0xfe808b079187cc460f47374580f5fb47c82b87a5") )

   

if __name__ == "__main__":
  asyncio.run(main()) 