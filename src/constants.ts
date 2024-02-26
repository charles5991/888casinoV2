import { GambaStandardTokens, TokenMeta } from "gamba-react-ui-v2";
import { PublicKey } from "@solana/web3.js";

// Can be configured in .env
export const RPC_ENDPOINT =
  import.meta.env.VITE_RPC_ENDPOINT ??
  "https://mainnet.helius-rpc.com/?api-key=b528b53f-a0ad-44d6-b511-70607a305b4d";

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  "2yWGEWW5hMtMbvGAKsqVxurQTKqTmSNBLTYUozG5Qdd7"
);

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = "v2-play.gamba.so";

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  // {
  //   mint: new PublicKey(""),
  //   symbol: '???',
  //   name: 'Custom SPL Token',
  //   image: "image url",
  //   decimals: 6,
  //   baseWager: 1 * 1e6,
  // }
];
