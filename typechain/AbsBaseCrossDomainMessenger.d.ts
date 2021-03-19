/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AbsBaseCrossDomainMessengerInterface extends ethers.utils.Interface {
  functions: {
    "messageNonce()": FunctionFragment;
    "relayedMessages(bytes32)": FunctionFragment;
    "sendMessage(address,bytes,uint32)": FunctionFragment;
    "sentMessages(bytes32)": FunctionFragment;
    "successfulMessages(bytes32)": FunctionFragment;
    "xDomainMessageSender()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "messageNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "relayedMessages",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sentMessages",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "successfulMessages",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "xDomainMessageSender",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "messageNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relayedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sentMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "successfulMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "xDomainMessageSender",
    data: BytesLike
  ): Result;

  events: {
    "RelayedMessage(bytes32)": EventFragment;
    "SentMessage(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RelayedMessage"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SentMessage"): EventFragment;
}

export class AbsBaseCrossDomainMessenger extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AbsBaseCrossDomainMessengerInterface;

  functions: {
    messageNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    "messageNonce()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    relayedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "relayedMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    sendMessage(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "sendMessage(address,bytes,uint32)"(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sentMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "sentMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    successfulMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "successfulMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<[string]>;

    "xDomainMessageSender()"(overrides?: CallOverrides): Promise<[string]>;
  };

  messageNonce(overrides?: CallOverrides): Promise<BigNumber>;

  "messageNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

  relayedMessages(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "relayedMessages(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  sendMessage(
    _target: string,
    _message: BytesLike,
    _gasLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "sendMessage(address,bytes,uint32)"(
    _target: string,
    _message: BytesLike,
    _gasLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sentMessages(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "sentMessages(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  successfulMessages(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "successfulMessages(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  xDomainMessageSender(overrides?: CallOverrides): Promise<string>;

  "xDomainMessageSender()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    messageNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "messageNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    relayedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "relayedMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    sendMessage(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "sendMessage(address,bytes,uint32)"(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sentMessages(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "sentMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    successfulMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "successfulMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<string>;

    "xDomainMessageSender()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    RelayedMessage(
      msgHash: null
    ): TypedEventFilter<[string], { msgHash: string }>;

    SentMessage(message: null): TypedEventFilter<[string], { message: string }>;
  };

  estimateGas: {
    messageNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "messageNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    relayedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "relayedMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendMessage(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "sendMessage(address,bytes,uint32)"(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sentMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sentMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    successfulMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "successfulMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<BigNumber>;

    "xDomainMessageSender()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    messageNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "messageNonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    relayedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "relayedMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendMessage(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "sendMessage(address,bytes,uint32)"(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sentMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "sentMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    successfulMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "successfulMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    xDomainMessageSender(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "xDomainMessageSender()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
