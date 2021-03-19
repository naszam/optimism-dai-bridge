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

interface IOVMStateCommitmentChainInterface extends ethers.utils.Interface {
  functions: {
    "appendStateBatch(bytes32[],uint256)": FunctionFragment;
    "deleteStateBatch(tuple)": FunctionFragment;
    "getLastSequencerTimestamp()": FunctionFragment;
    "getTotalBatches()": FunctionFragment;
    "getTotalElements()": FunctionFragment;
    "insideFraudProofWindow(tuple)": FunctionFragment;
    "verifyStateCommitment(bytes32,tuple,tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "appendStateBatch",
    values: [BytesLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteStateBatch",
    values: [
      {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastSequencerTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBatches",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalElements",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "insideFraudProofWindow",
    values: [
      {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyStateCommitment",
    values: [
      BytesLike,
      {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      { index: BigNumberish; siblings: BytesLike[] }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "appendStateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteStateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastSequencerTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalElements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "insideFraudProofWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyStateCommitment",
    data: BytesLike
  ): Result;

  events: {
    "StateBatchAppended(uint256,bytes32,uint256,uint256,bytes)": EventFragment;
    "StateBatchDeleted(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StateBatchAppended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StateBatchDeleted"): EventFragment;
}

export class IOVMStateCommitmentChain extends Contract {
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

  interface: IOVMStateCommitmentChainInterface;

  functions: {
    appendStateBatch(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "appendStateBatch(bytes32[],uint256)"(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteStateBatch(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLastSequencerTimestamp(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _lastSequencerTimestamp: BigNumber }>;

    "getLastSequencerTimestamp()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _lastSequencerTimestamp: BigNumber }>;

    getTotalBatches(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalBatches: BigNumber }>;

    "getTotalBatches()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalBatches: BigNumber }>;

    getTotalElements(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalElements: BigNumber }>;

    "getTotalElements()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalElements: BigNumber }>;

    insideFraudProofWindow(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<[boolean] & { _inside: boolean }>;

    "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<[boolean] & { _inside: boolean }>;

    verifyStateCommitment(
      _element: BytesLike,
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      _proof: { index: BigNumberish; siblings: BytesLike[] },
      overrides?: CallOverrides
    ): Promise<[boolean] & { _verified: boolean }>;

    "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes),(uint256,bytes32[]))"(
      _element: BytesLike,
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      _proof: { index: BigNumberish; siblings: BytesLike[] },
      overrides?: CallOverrides
    ): Promise<[boolean] & { _verified: boolean }>;
  };

  appendStateBatch(
    _batch: BytesLike[],
    _shouldStartAtElement: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "appendStateBatch(bytes32[],uint256)"(
    _batch: BytesLike[],
    _shouldStartAtElement: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteStateBatch(
    _batchHeader: {
      batchIndex: BigNumberish;
      batchRoot: BytesLike;
      batchSize: BigNumberish;
      prevTotalElements: BigNumberish;
      extraData: BytesLike;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes))"(
    _batchHeader: {
      batchIndex: BigNumberish;
      batchRoot: BytesLike;
      batchSize: BigNumberish;
      prevTotalElements: BigNumberish;
      extraData: BytesLike;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "getLastSequencerTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalBatches()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalElements()"(overrides?: CallOverrides): Promise<BigNumber>;

  insideFraudProofWindow(
    _batchHeader: {
      batchIndex: BigNumberish;
      batchRoot: BytesLike;
      batchSize: BigNumberish;
      prevTotalElements: BigNumberish;
      extraData: BytesLike;
    },
    overrides?: CallOverrides
  ): Promise<boolean>;

  "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes))"(
    _batchHeader: {
      batchIndex: BigNumberish;
      batchRoot: BytesLike;
      batchSize: BigNumberish;
      prevTotalElements: BigNumberish;
      extraData: BytesLike;
    },
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyStateCommitment(
    _element: BytesLike,
    _batchHeader: {
      batchIndex: BigNumberish;
      batchRoot: BytesLike;
      batchSize: BigNumberish;
      prevTotalElements: BigNumberish;
      extraData: BytesLike;
    },
    _proof: { index: BigNumberish; siblings: BytesLike[] },
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes),(uint256,bytes32[]))"(
    _element: BytesLike,
    _batchHeader: {
      batchIndex: BigNumberish;
      batchRoot: BytesLike;
      batchSize: BigNumberish;
      prevTotalElements: BigNumberish;
      extraData: BytesLike;
    },
    _proof: { index: BigNumberish; siblings: BytesLike[] },
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    appendStateBatch(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "appendStateBatch(bytes32[],uint256)"(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteStateBatch(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "getLastSequencerTimestamp()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalBatches()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalElements()"(overrides?: CallOverrides): Promise<BigNumber>;

    insideFraudProofWindow(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<boolean>;

    "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyStateCommitment(
      _element: BytesLike,
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      _proof: { index: BigNumberish; siblings: BytesLike[] },
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes),(uint256,bytes32[]))"(
      _element: BytesLike,
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      _proof: { index: BigNumberish; siblings: BytesLike[] },
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    StateBatchAppended(
      _batchIndex: BigNumberish | null,
      _batchRoot: null,
      _batchSize: null,
      _prevTotalElements: null,
      _extraData: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, string],
      {
        _batchIndex: BigNumber;
        _batchRoot: string;
        _batchSize: BigNumber;
        _prevTotalElements: BigNumber;
        _extraData: string;
      }
    >;

    StateBatchDeleted(
      _batchIndex: BigNumberish | null,
      _batchRoot: null
    ): TypedEventFilter<
      [BigNumber, string],
      { _batchIndex: BigNumber; _batchRoot: string }
    >;
  };

  estimateGas: {
    appendStateBatch(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "appendStateBatch(bytes32[],uint256)"(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteStateBatch(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "getLastSequencerTimestamp()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalBatches()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalElements()"(overrides?: CallOverrides): Promise<BigNumber>;

    insideFraudProofWindow(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyStateCommitment(
      _element: BytesLike,
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      _proof: { index: BigNumberish; siblings: BytesLike[] },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes),(uint256,bytes32[]))"(
      _element: BytesLike,
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      _proof: { index: BigNumberish; siblings: BytesLike[] },
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    appendStateBatch(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "appendStateBatch(bytes32[],uint256)"(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteStateBatch(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLastSequencerTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLastSequencerTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBatches(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTotalBatches()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalElements(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTotalElements()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    insideFraudProofWindow(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyStateCommitment(
      _element: BytesLike,
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      _proof: { index: BigNumberish; siblings: BytesLike[] },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes),(uint256,bytes32[]))"(
      _element: BytesLike,
      _batchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      },
      _proof: { index: BigNumberish; siblings: BytesLike[] },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
