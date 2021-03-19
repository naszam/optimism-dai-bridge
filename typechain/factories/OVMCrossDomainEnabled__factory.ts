/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { OVMCrossDomainEnabled } from "../OVMCrossDomainEnabled";

export class OVMCrossDomainEnabled__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _messenger: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OVMCrossDomainEnabled> {
    return super.deploy(
      _messenger,
      overrides || {}
    ) as Promise<OVMCrossDomainEnabled>;
  }
  getDeployTransaction(
    _messenger: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_messenger, overrides || {});
  }
  attach(address: string): OVMCrossDomainEnabled {
    return super.attach(address) as OVMCrossDomainEnabled;
  }
  connect(signer: Signer): OVMCrossDomainEnabled__factory {
    return super.connect(signer) as OVMCrossDomainEnabled__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OVMCrossDomainEnabled {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OVMCrossDomainEnabled;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_messenger",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "messenger",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516100f83803806100f88339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b03199092169190911790556094806100646000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633cb747bf14602d575b600080fd5b6033604f565b604080516001600160a01b039092168252519081900360200190f35b6000546001600160a01b03168156fea264697066735822122061b127db002dd511c960544abcf9f44254d2236d20b6e9f6b1d35ec654636e0b64736f6c63430007060033";
