import { Currency, ETHER, Token } from '@daoswapdex-heco-mainnet/daoswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'HT'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
