/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IAbsBaseCrossDomainMessenger } from "../IAbsBaseCrossDomainMessenger";

export class IAbsBaseCrossDomainMessenger__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAbsBaseCrossDomainMessenger {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAbsBaseCrossDomainMessenger;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
    ],
    name: "RelayedMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "SentMessage",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "uint32",
        name: "_gasLimit",
        type: "uint32",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xDomainMessageSender",
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
