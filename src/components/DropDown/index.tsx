import Script from 'next/script'

import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useCallback,
  useState
} from 'react'

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'

import { Libraries, useLoadScript } from '@react-google-maps/api'

import { ICity } from '@/types'
import { cn } from '@/utils/cn'

import FormLine from '../FormLine'
import { Spinner } from '../icons'

const libraries: Libraries = ['places']

interface IDropDown extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  title?: string
  error?: string
  required?: boolean
  className?: string
  onLocationSelect: Dispatch<SetStateAction<ICity>>
}

const DropDown = ({
  id,
  title,
  error,
  required,
  className,
  onLocationSelect,
  ...props
}: IDropDown) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_PLACES_API_KEY!,
    libraries
  })

  const {
    init,
    ready,
    value,
    suggestions: { status, data, loading },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    debounce: 300
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    console.log(value)
    setValue(value)
    setShowDropdown(value !== '')

    if (value === '') {
      onLocationSelect({ lat: '0', lng: '0', name: '' })
      clearSuggestions()
    }
  }

  const handleLocationSelect = useCallback(
    ({ description }: { description: string }) =>
      () => {
        setValue(description, false)
        clearSuggestions()
        setShowDropdown(false)
        getGeocode({ address: description }).then((results) => {
          const { lat, lng } = getLatLng(results[0])
          const city = description.split(',')[0]
          onLocationSelect({
            lat: lat.toString(),
            lng: lng.toString(),
            name: city
          })
        })
      },
    [clearSuggestions, onLocationSelect, setValue]
  )

  const renderSuggestions = useCallback(
    () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text }
        } = suggestion

        return (
          <li key={place_id}>
            <button
              type="button"
              className="text-primaryText w-full truncate px-4 py-2 text-left text-sm hover:bg-gray-100"
              onClick={handleLocationSelect(suggestion)}
            >
              <strong>{main_text}</strong> <small>{secondary_text}</small>
            </button>
          </li>
        )
      }),
    [data, handleLocationSelect]
  )

  if (!isLoaded) return <div>Loading...</div>

  return (
    <>
      <Script
        id="googlemaps"
        type="text/javascript"
        strategy="lazyOnload"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_PLACES_API_KEY}&libraries=places`}
        onReady={init}
      />
      <div className={cn('relative flex flex-col', className)}>
        <FormLine
          id={id}
          title={title}
          error={error}
          required={required}
          value={value}
          onChange={handleInputChange}
          disabled={!ready}
          {...props}
        />
        {showDropdown && (
          <ul className="absolute top-24 z-[401] flex w-full flex-col gap-2 overflow-hidden rounded-md bg-black shadow-xl">
            {status === 'OK' && renderSuggestions()}
            {status !== 'OK' && (
              <li className="w-full truncate px-4 py-2 text-left text-sm">
                {loading ? (
                  <Spinner className="mx-auto" />
                ) : (
                  'No locations found'
                )}
              </li>
            )}
          </ul>
        )}
      </div>
    </>
  )
}

export default DropDown
