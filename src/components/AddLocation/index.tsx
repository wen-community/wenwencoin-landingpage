import { Dispatch, SetStateAction } from 'react'

import { cn } from '@/utils/cn'

import DropDown from '../DropDown'
import FormLine from '../FormLine'
import { Cross } from '../icons'

type IAddLocation = {
  showForm: boolean
  setShowForm: Dispatch<SetStateAction<boolean>>
}

const AddLocation = ({ showForm, setShowForm }: IAddLocation) => {
  return (
    <div
      className={cn('flex items-center justify-between', {
        hidden: !showForm
      })}
    >
      <form className="flex items-end gap-5">
        <FormLine id="name" title="Name / Username" placeholder="Anna Smith" />
        <DropDown id="city" title="Location" placeholder="New York" />
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
