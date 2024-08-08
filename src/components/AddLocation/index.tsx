import { Dispatch, SetStateAction } from 'react'

import { cn } from '@/utils/cn'

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
        <label title="name" htmlFor="name" className="flex flex-col gap-2">
          Name / Username
          <input
            id="name"
            type="text"
            className="rounded-lg border border-black p-2"
            placeholder="Anna Smith"
          />
        </label>
        <label title="city" htmlFor="city" className="flex flex-col gap-2">
          Location
          <input
            id="city"
            type="text"
            className="rounded-lg border border-black p-2"
            placeholder="Anna Smith"
          />
        </label>
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
