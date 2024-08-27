import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState
} from 'react'
import toast from 'react-hot-toast'

import * as yup from 'yup'

import { supabase } from '@/services/supabase'
import { DEFAULT_CITY, ICity } from '@/types'
import { cn } from '@/utils/cn'

import DropDown from '../DropDown'
import FormLine from '../FormLine'
import { Cross, Spinner } from '../icons'

type IAddLocation = {
  showForm: boolean
  setShowForm: Dispatch<SetStateAction<boolean>>
  fetchMarkers: () => void
}

const nameSchema = yup
  .string()
  .required('Please enter a name')
  .max(20, 'name is too long (20 characters max)')
  .min(3, 'name is too short (3 characters min)')

const AddLocation = ({ showForm, setShowForm, fetchMarkers }: IAddLocation) => {
  const [selected, setSelected] = useState<ICity>(DEFAULT_CITY)
  const [dropdownError, setDropDownError] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleAddLocation = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setIsLoading(true)
      if (!selected.name) {
        setDropDownError('Please select a location')
        return
      }
      try {
        const username = await nameSchema.validate(name)

        const { error } = await supabase.rpc('add_user_and_city', {
          username,
          city_name: selected.name,
          latitude: (
            Number(selected.lat) +
            (Math.random() - 0.5) * 0.1
          ).toString(),
          longitude: (
            Number(selected.lng) +
            (Math.random() - 0.5) * 0.1
          ).toString()
        })

        if (error) toast.error(error.message)
        else toast.success('Thanks for adding a location!')
        setIsLoading(false)
        fetchMarkers()
        setSelected(DEFAULT_CITY)
        setName('')
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          setNameError(error.message)
          setIsLoading(false)
          return
        }
      }
    },
    [fetchMarkers, name, selected.lat, selected.lng, selected.name]
  )

  return (
    <div
      className={cn(
        'flex flex-wrap-reverse items-start justify-between gap-y-2 md:flex-wrap md:items-center',
        {
          hidden: !showForm
        }
      )}
    >
      <form
        onSubmit={handleAddLocation}
        className="flex flex-wrap items-end gap-5"
      >
        <FormLine
          error={nameError}
          id="name"
          title="Name / Username"
          placeholder="Anna Smith"
          onChange={(e) => setName(e.target.value)}
        />
        <DropDown
          error={dropdownError}
          onLocationSelect={setSelected}
          title="Location"
          id="city"
          placeholder="New York"
        />
        <button
          disabled={isLoading || selected.name === ''}
          className="flex h-10 w-max items-center justify-center gap-2 rounded-2.5 border border-black bg-black px-5 py-2.5 font-medium text-white transition-colors hover:bg-white hover:text-black disabled:opacity-50"
          type="submit"
        >
          {isLoading ? <Spinner /> : 'Add to the map'}
        </button>
      </form>
      <button
        title="close form"
        type="button"
        className="ml-auto md:ml-0"
        onClick={() => setShowForm(false)}
      >
        <Cross />
      </button>
    </div>
  )
}

export default AddLocation
