import {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useCallback,
  useState
} from 'react'

import cities from 'cities.json/cities.json'

import { ICity } from '@/types'
import { cn } from '@/utils/cn'

import FormLine from '../FormLine'

const Item = ({
  item,
  onSelect
}: {
  item: ICity
  onSelect: (item: ICity) => void
}) => (
  <li>
    <button
      type="button"
      className="w-full p-2 text-start hover:bg-black/10"
      onClick={() => onSelect(item)}
    >
      {item.name}
    </button>
  </li>
)

interface IDropDown extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  title?: string
  error?: string
  required?: boolean
  className?: string
  onLocationSelect: Dispatch<SetStateAction<ICity>>
  selected: string
}

const DropDown = ({
  id,
  title,
  error,
  required,
  className,
  onLocationSelect,
  selected,
  ...props
}: IDropDown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const handleSelect = useCallback(
    (item: ICity) => {
      onLocationSelect(item)
      setValue('')
      setIsOpen(false)
    },
    [onLocationSelect]
  )

  return (
    <div
      onFocus={() => setIsOpen(true)}
      className={cn('relative flex flex-col', className)}
    >
      <FormLine
        id={id}
        title={title}
        error={error}
        required={required}
        value={selected}
        readOnly
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      {isOpen && (
        <div className="absolute top-24 z-[401] flex w-full flex-col gap-2 overflow-hidden rounded-md bg-white p-2 shadow-xl">
          <div className="rounded-md border p-2">
            <input
              title="Search"
              type="text"
              className="w-44 rounded-lg border-black/20 outline-none"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search for a city"
            />
          </div>
          <ul onBlur={() => setIsOpen(false)}>
            {(cities as ICity[])
              .filter((item) => item.name.startsWith(value))
              .splice(0, 5)
              .map((item: ICity) => (
                <Item key={item.name} item={item} onSelect={handleSelect} />
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropDown
