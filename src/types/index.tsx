export type ICity = {
  name: string
  lat: string
  lng: string
}

export const DEFAULT_CITY = {
  name: '',
  lat: '',
  lng: '',
  country: '',
  admin1: '',
  admin2: ''
}

export type ILocation = {
  id: number
  city: string
  created_at: string
  lat: string
  lng: string
  user_count: number
}

export type IUser = {
  id: number
  username: string
  city: string
  lat: string
  lng: string
  created_at: string
  twitter_name: string
  telegram_name: string | null
  wallet_address: string | null
}
