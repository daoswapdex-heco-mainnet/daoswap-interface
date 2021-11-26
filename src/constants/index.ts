import { ChainId, JSBI, Percent, Token, WETH } from '@daoswapdex-heco-mainnet/daoswap-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { injected, walletconnect } from '../connectors'

export const ROUTER_ADDRESS = '0xb26B4d59FB87D726Aef64933040ccf7009e7DEDa'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// export const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.HECO_MAINNET, '0x9362Bbef4B8313A8Aa9f0c9808B80577Aa26B73B', 6, 'USDC', 'USD//C')
export const USDT = new Token(
  ChainId.HECO_MAINNET,
  '0xa71EdC38d189767582C38A3145b5873052c3e47a',
  18,
  'USDT',
  'Tether USD'
)
export const ETH = new Token(
  ChainId.HECO_MAINNET,
  '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
  18,
  'ETH',
  'Heco-Peg ETH Token'
)
export const HFIL = new Token(
  ChainId.HECO_MAINNET,
  '0xae3a768f9aB104c69A7CD6041fE16fFa235d1810',
  18,
  'HFIL',
  'Heco-Peg HFIL Token'
)
export const HT = new Token(ChainId.HECO_MAINNET, '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F', 18, 'HT', 'Wrapped HT')
export const HECO_UNI = new Token(
  ChainId.HECO_MAINNET,
  '0x22C54cE8321A4015740eE1109D9cBc25815C46E6',
  18,
  'UNI',
  'Heco-Peg UNI Token'
)
export const MDX = new Token(
  ChainId.HECO_MAINNET,
  '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
  18,
  'MDX',
  'Heco-Peg MDX Token'
)
export const HBCH = new Token(
  ChainId.HECO_MAINNET,
  '0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375',
  18,
  'HBCH',
  'Heco-Peg HBCH Token'
)
export const HLTC = new Token(
  ChainId.HECO_MAINNET,
  '0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4',
  18,
  'HLTC',
  'Heco-Peg HLTC Token'
)
// export const COMP = new Token(ChainId.MAINNET, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound')
// export const MKR = new Token(ChainId.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker')
// export const AMPL = new Token(ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')
// export const WBTC = new Token(ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 18, 'WBTC', 'Wrapped BTC')

// TODO:Daoswap UNI -> DAO
// TODO:Daoswap 添加 Rinkeby 链上的代币信息
export const DAO_HECO_TESTNET = new Token(
  ChainId.HECO_TESTNET,
  '0xd2f169c79553654452a3889b210AEeF494eB2374',
  18,
  'DAO',
  'Daoswap'
)
export const DAI_HECO_TESTNET = new Token(
  ChainId.HECO_TESTNET,
  '0x60d64Ef311a4F0E288120543A14e7f90E76304c6',
  18,
  'DAI',
  'Dai Stablecoin'
)

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 14
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320
export const PROPOSAL_LENGTH_IN_SECS = AVERAGE_BLOCK_TIME_IN_SECS * PROPOSAL_LENGTH_IN_BLOCKS

// export const TIMELOCK_ADDRESS = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'

const UNI_ADDRESS = '0xc096332CAacF00319703558988aD03eC6586e704'
export const DAO_ADDRESS = UNI_ADDRESS
export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  // TODO:Daoswap 代替UNI的代币信息
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, UNI_ADDRESS, 18, 'DAO', 'Daoswap'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.HECO_MAINNET]: new Token(ChainId.HECO_MAINNET, UNI_ADDRESS, 18, 'DAO', 'Daoswap'),
  [ChainId.HECO_TESTNET]: new Token(ChainId.HECO_TESTNET, UNI_ADDRESS, 18, 'DAO', 'Daoswap')
}

// export const COMMON_CONTRACT_NAMES: { [address: string]: string } = {
//   [UNI_ADDRESS]: 'UNI',
//   [TIMELOCK_ADDRESS]: 'Timelock'
// }

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WETH[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WETH[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WETH[ChainId.KOVAN]],
  [ChainId.HECO_MAINNET]: [WETH[ChainId.HECO_MAINNET]],
  [ChainId.HECO_TESTNET]: [WETH[ChainId.HECO_TESTNET]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  // [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, COMP, MKR]
  [ChainId.HECO_MAINNET]: [...WETH_ONLY[ChainId.HECO_MAINNET], USDC, USDT]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    // [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  // [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT]
  [ChainId.HECO_MAINNET]: [...WETH_ONLY[ChainId.HECO_MAINNET], USDC, USDT]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  // [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT]
  [ChainId.HECO_MAINNET]: [...WETH_ONLY[ChainId.HECO_MAINNET], USDC, USDT]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.HECO_MAINNET]: [
    // [
    //   new Token(ChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
    //   new Token(ChainId.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin')
    // ],
    [USDC, USDT]
    // [DAI, USDT]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
// export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 3%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))

// Node Type
export const USDT_DAO_PAIR_ADDRESS = '0x1dbCac9E084A25d542893B14128a5910dF43a6b7'
export const USDT_DAO_STAKING_REWARDS_ADDRESS = '0xAe7184fcCCFc096f5F48Fffe384Cce8433FCE0E0'
export const NODE_TYPE_STELLAR_MIN_USD_VALUE = JSBI.multiply(
  JSBI.BigInt(10000),
  JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
) // 10000
export const NODE_TYPE_PLANETARY_MIN_USD_VALUE = JSBI.multiply(
  JSBI.BigInt(1000),
  JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
) // 1000
