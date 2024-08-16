export type ICity = {
  name: string
  lat: string
  lng: string
  country: string
  admin1: string
  admin2: string
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
