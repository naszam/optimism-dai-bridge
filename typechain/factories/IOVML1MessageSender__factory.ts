/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IOVML1MessageSender } from "../IOVML1MessageSender";

export class IOVML1MessageSender__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOVML1MessageSender {
    return new Contract(address, _abi, signerOrProvider) as IOVML1MessageSender;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getL1MessageSender",
    outputs: [
      {
        internalType: "address",
        name: "_l1MessageSender",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
