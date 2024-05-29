import { writable } from 'svelte/store'
import type { User, Account, Rates } from '@state/types.ts'

export const userStore = writable<User | null>(null)

export const accountStore = writable<Account>({
  balance: 0,
  league: 'Bronze',
})

export const ratesStore = writable<Rates>({
  tap_rate: 1,
  energy: 0,
  max_energy: 100,
})
