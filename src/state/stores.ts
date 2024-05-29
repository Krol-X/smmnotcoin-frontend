import { writable } from 'svelte/store'
import type { User, Account, Rates } from '@state/types.ts'

export const userStore = writable<User | null>(null)

export const accountStore = writable<Account>({
  balance: 0,
  league: 'Bronze',
  energy: 100,
  tap_rate: 2,
  max_energy: 100
})

setInterval(() => {
  accountStore.update(account => {
    if (account.energy < account.max_energy) {
      return {
        ...account,
        energy: Math.min(account.energy + account.tap_rate, account.max_energy)
      };
    }
    return account;
  });
}, 1000)
