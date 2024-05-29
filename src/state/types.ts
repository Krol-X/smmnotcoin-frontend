export interface User {
  telegram_id: number;
  telegram_name: string;
  session_key: string;
}

export interface Account {
  balance: number;
  league: string;
}

export interface Rates {
  tap_rate: number;
  energy: number;
  max_energy: number;
}
