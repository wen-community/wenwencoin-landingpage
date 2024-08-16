import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import toast from 'react-hot-toast'

import * as yup from 'yup'

import { supabase } from '@/services/supabase'
import { DEFAULT_CITY, ICity } from '@/types'
import { cn } from '@/utils/cn'

import DropDown from '../DropDown'
import FormLine from '../FormLine'
import { Cross } from '../icons'

type IAddLocation = {
  showForm: boolean
  setShowForm: Dispatch<SetStateAction<boolean>>
}

const nameSchema = yup.string().required('Please enter a name')

const AddLocation = ({ showForm, setShowForm }: IAddLocation) => {
  const [selected, setSelected] = useState<ICity>(DEFAULT_CITY)
  const [dropdownError, setDropDownError] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')
  const [name, setName] = useState<string>('')

  const handleAddLocation = useCallback(async () => {
    if (!selected.name) {
      setDropDownError('Please select a location')
      return
    }
    try {
      const username = await nameSchema.validate(name)

      const { error } = await supabase.rpc('add_user_and_city', {
        username,
        city: selected.name,
        latitude: selected.lat,
        longitude: selected.lng
      })

      if (error) toast.error(error.message)
      else toast.success('Thanks for adding a location!')
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setNameError(error.message)
        return
      }
    }
  }, [name, selected.lat, selected.lng, selected.name])

  return (
    <div
      className={cn('flex items-center justify-between', {
        hidden: !showForm
      })}
    >
      <form onSubmit={handleAddLocation} className="flex items-end gap-5">
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
          selected={selected.name}
          title="Location"
          id="city"
          placeholder="New York"
        />
        <button
          className="h-max w-max rounded-2.5 bg-black px-5 py-2.5 font-medium text-white"
          type="submit"
        >
          Add to the map
        </button>
      </form>
      <button
        title="close form"
        type="button"
        onClick={() => setShowForm(false)}
      >
        <Cross />
      </button>
    </div>
  )
}

export default AddLocation
