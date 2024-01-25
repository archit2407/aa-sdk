import {
  getContract,
  encodeFunctionData,
  encodeAbiParameters,
  type Address,
  type GetContractReturnType,
  type GetFunctionArgs,
} from "viem";
import { type Plugin } from "../types.js";
import { type IMSCA } from "../../types.js";
import {
  type UserOperationOverrides,
  type SupportedTransports,
  type ISmartAccountProvider,
} from "@alchemy/aa-core";
import { installPlugin as installPlugin_ } from "../../plugin-manager/installPlugin.js";
import { type FunctionReference } from "../../account-loupe/types.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6900PluginGen: This file is auto-generated by plugingen
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type InstallArgs = [];
export type InstallTokenReceiverPluginParams = {
  args: Parameters<typeof encodeAbiParameters<InstallArgs>>[1];
  pluginAddress?: Address;
  dependencyOverrides?: FunctionReference[];
};

const addresses = {
  11155111: "0x4FCDe5A446208a20A1539FC425832334bc8360Fb" as Address,
} as Record<number, Address>;

const TokenReceiverPlugin_ = {
  meta: {
    name: "Token Receiver Plugin",
    version: "1.0.0",
    addresses,
  },
  getContract: (
    provider: ISmartAccountProvider,
    address?: Address
  ): GetContractReturnType<
    typeof TokenReceiverPluginAbi,
    typeof provider.rpcClient,
    undefined,
    Address
  > =>
    getContract({
      address: address || addresses[provider.rpcClient.chain.id],
      abi: TokenReceiverPluginAbi,
      publicClient: provider.rpcClient,
    }),
  accountMethods: (_account: IMSCA<any, any, any>) => ({
    encodeTokensReceivedData: ({
      args,
    }: GetFunctionArgs<
      typeof TokenReceiverPluginExecutionFunctionAbi,
      "tokensReceived"
    >) => {
      return encodeFunctionData({
        abi: TokenReceiverPluginExecutionFunctionAbi,
        functionName: "tokensReceived",
        args,
      });
    },

    encodeOnErc721ReceivedData: ({
      args,
    }: GetFunctionArgs<
      typeof TokenReceiverPluginExecutionFunctionAbi,
      "onERC721Received"
    >) => {
      return encodeFunctionData({
        abi: TokenReceiverPluginExecutionFunctionAbi,
        functionName: "onERC721Received",
        args,
      });
    },

    encodeOnErc1155ReceivedData: ({
      args,
    }: GetFunctionArgs<
      typeof TokenReceiverPluginExecutionFunctionAbi,
      "onERC1155Received"
    >) => {
      return encodeFunctionData({
        abi: TokenReceiverPluginExecutionFunctionAbi,
        functionName: "onERC1155Received",
        args,
      });
    },

    encodeOnErc1155BatchReceivedData: ({
      args,
    }: GetFunctionArgs<
      typeof TokenReceiverPluginExecutionFunctionAbi,
      "onERC1155BatchReceived"
    >) => {
      return encodeFunctionData({
        abi: TokenReceiverPluginExecutionFunctionAbi,
        functionName: "onERC1155BatchReceived",
        args,
      });
    },
  }),
  providerMethods: <
    TTransport extends SupportedTransports,
    P extends ISmartAccountProvider<TTransport> & {
      account: IMSCA<TTransport>;
    }
  >(
    provider: P
  ) => ({
    tokensReceived: (
      {
        args,
      }: GetFunctionArgs<
        typeof TokenReceiverPluginExecutionFunctionAbi,
        "tokensReceived"
      >,
      overrides?: UserOperationOverrides
    ) => {
      const callData = encodeFunctionData({
        abi: TokenReceiverPluginExecutionFunctionAbi,
        functionName: "tokensReceived",
        args,
      });

      return provider.sendUserOperation(callData, overrides);
    },

    onErc721Received: (
      {
        args,
      }: GetFunctionArgs<
        typeof TokenReceiverPluginExecutionFunctionAbi,
        "onERC721Received"
      >,
      overrides?: UserOperationOverrides
    ) => {
      const callData = encodeFunctionData({
        abi: TokenReceiverPluginExecutionFunctionAbi,
        functionName: "onERC721Received",
        args,
      });

      return provider.sendUserOperation(callData, overrides);
    },

    onErc1155Received: (
      {
        args,
      }: GetFunctionArgs<
        typeof TokenReceiverPluginExecutionFunctionAbi,
        "onERC1155Received"
      >,
      overrides?: UserOperationOverrides
    ) => {
      const callData = encodeFunctionData({
        abi: TokenReceiverPluginExecutionFunctionAbi,
        functionName: "onERC1155Received",
        args,
      });

      return provider.sendUserOperation(callData, overrides);
    },

    onErc1155BatchReceived: (
      {
        args,
      }: GetFunctionArgs<
        typeof TokenReceiverPluginExecutionFunctionAbi,
        "onERC1155BatchReceived"
      >,
      overrides?: UserOperationOverrides
    ) => {
      const callData = encodeFunctionData({
        abi: TokenReceiverPluginExecutionFunctionAbi,
        functionName: "onERC1155BatchReceived",
        args,
      });

      return provider.sendUserOperation(callData, overrides);
    },

    installTokenReceiverPlugin: (
      params: InstallTokenReceiverPluginParams,
      overrides?: UserOperationOverrides
    ) => {
      const chain = provider.rpcClient.chain;
      const dependencies = params.dependencyOverrides ?? [];
      const pluginAddress =
        params.pluginAddress ??
        (TokenReceiverPlugin_.meta.addresses[chain.id] as Address | undefined);

      if (!pluginAddress) {
        throw new Error(
          "missing TokenReceiverPlugin address for chain " + chain.name
        );
      }

      return installPlugin_(
        provider,
        {
          pluginAddress,
          pluginInitData: encodeAbiParameters([], params.args),
          dependencies,
        },
        overrides
      );
    },
  }),
};

export const TokenReceiverPlugin: Plugin<
  ReturnType<(typeof TokenReceiverPlugin_)["accountMethods"]>,
  ReturnType<(typeof TokenReceiverPlugin_)["providerMethods"]>,
  typeof TokenReceiverPluginAbi
> = TokenReceiverPlugin_;

export const TokenReceiverPluginExecutionFunctionAbi = [
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "tokensReceived",
    outputs: [],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155BatchReceived",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
] as const;

export const TokenReceiverPluginAbi = [
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155BatchReceived",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    name: "onInstall",
    outputs: [],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    name: "onUninstall",
    outputs: [],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [],
    name: "pluginManifest",
    outputs: [
      {
        name: "",
        internalType: "struct PluginManifest",
        type: "tuple",
        components: [
          { name: "interfaceIds", internalType: "bytes4[]", type: "bytes4[]" },
          {
            name: "dependencyInterfaceIds",
            internalType: "bytes4[]",
            type: "bytes4[]",
          },
          {
            name: "executionFunctions",
            internalType: "bytes4[]",
            type: "bytes4[]",
          },
          {
            name: "permittedExecutionSelectors",
            internalType: "bytes4[]",
            type: "bytes4[]",
          },
          {
            name: "permitAnyExternalAddress",
            internalType: "bool",
            type: "bool",
          },
          { name: "canSpendNativeToken", internalType: "bool", type: "bool" },
          {
            name: "permittedExternalCalls",
            internalType: "struct ManifestExternalCallPermission[]",
            type: "tuple[]",
            components: [
              {
                name: "externalAddress",
                internalType: "address",
                type: "address",
              },
              { name: "permitAnySelector", internalType: "bool", type: "bool" },
              { name: "selectors", internalType: "bytes4[]", type: "bytes4[]" },
            ],
          },
          {
            name: "userOpValidationFunctions",
            internalType: "struct ManifestAssociatedFunction[]",
            type: "tuple[]",
            components: [
              {
                name: "executionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "associatedFunction",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
          {
            name: "runtimeValidationFunctions",
            internalType: "struct ManifestAssociatedFunction[]",
            type: "tuple[]",
            components: [
              {
                name: "executionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "associatedFunction",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
          {
            name: "preUserOpValidationHooks",
            internalType: "struct ManifestAssociatedFunction[]",
            type: "tuple[]",
            components: [
              {
                name: "executionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "associatedFunction",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
          {
            name: "preRuntimeValidationHooks",
            internalType: "struct ManifestAssociatedFunction[]",
            type: "tuple[]",
            components: [
              {
                name: "executionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "associatedFunction",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
          {
            name: "executionHooks",
            internalType: "struct ManifestExecutionHook[]",
            type: "tuple[]",
            components: [
              {
                name: "executionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "preExecHook",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
              {
                name: "postExecHook",
                internalType: "struct ManifestFunction",
                type: "tuple",
                components: [
                  {
                    name: "functionType",
                    internalType: "enum ManifestAssociatedFunctionType",
                    type: "uint8",
                  },
                  { name: "functionId", internalType: "uint8", type: "uint8" },
                  {
                    name: "dependencyIndex",
                    internalType: "uint256",
                    type: "uint256",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [],
    name: "pluginMetadata",
    outputs: [
      {
        name: "",
        internalType: "struct PluginMetadata",
        type: "tuple",
        components: [
          { name: "name", internalType: "string", type: "string" },
          { name: "version", internalType: "string", type: "string" },
          { name: "author", internalType: "string", type: "string" },
          {
            name: "permissionDescriptors",
            internalType: "struct SelectorPermission[]",
            type: "tuple[]",
            components: [
              {
                name: "functionSelector",
                internalType: "bytes4",
                type: "bytes4",
              },
              {
                name: "permissionDescription",
                internalType: "string",
                type: "string",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      { name: "preExecHookData", internalType: "bytes", type: "bytes" },
    ],
    name: "postExecutionHook",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      { name: "sender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "preExecutionHook",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      { name: "sender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "preRuntimeValidationHook",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      {
        name: "userOp",
        internalType: "struct UserOperation",
        type: "tuple",
        components: [
          { name: "sender", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "initCode", internalType: "bytes", type: "bytes" },
          { name: "callData", internalType: "bytes", type: "bytes" },
          { name: "callGasLimit", internalType: "uint256", type: "uint256" },
          {
            name: "verificationGasLimit",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "preVerificationGas",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "maxFeePerGas", internalType: "uint256", type: "uint256" },
          {
            name: "maxPriorityFeePerGas",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "paymasterAndData", internalType: "bytes", type: "bytes" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "userOpHash", internalType: "bytes32", type: "bytes32" },
    ],
    name: "preUserOpValidationHook",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      { name: "sender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "runtimeValidationFunction",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "tokensReceived",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "functionId", internalType: "uint8", type: "uint8" },
      {
        name: "userOp",
        internalType: "struct UserOperation",
        type: "tuple",
        components: [
          { name: "sender", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "initCode", internalType: "bytes", type: "bytes" },
          { name: "callData", internalType: "bytes", type: "bytes" },
          { name: "callGasLimit", internalType: "uint256", type: "uint256" },
          {
            name: "verificationGasLimit",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "preVerificationGas",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "maxFeePerGas", internalType: "uint256", type: "uint256" },
          {
            name: "maxPriorityFeePerGas",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "paymasterAndData", internalType: "bytes", type: "bytes" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "userOpHash", internalType: "bytes32", type: "bytes32" },
    ],
    name: "userOpValidationFunction",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidAction" },
  { type: "error", inputs: [], name: "NotContractCaller" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "NotInitialized" },
] as const;