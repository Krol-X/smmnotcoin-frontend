export interface User {
  telegram_id: number;
  telegram_name: string;
  session_key: string;
}

export interface Account {
  balance: number;
  league: string;
  energy: number;
  tap_rate: number;
  max_energy: number;
}
