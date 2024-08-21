import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useCallback,
  useMemo,
  useState
} from 'react'

import cities from 'cities.json/cities.json'

import { DEFAULT_CITY, ICity } from '@/types'
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
      {item.name} ({item.country})
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
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const handleSelect = useCallback(
    (item: ICity) => {
      onLocationSelect(item)
      setValue(item.name)
      setIsOpen(false)
    },
    [onLocationSelect]
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      if (isOpen) onLocationSelect(DEFAULT_CITY)
    },
    [isOpen, onLocationSelect]
  )

  const itemList = useMemo(() => {
    if (value === '') return []

    const uniqueCities = new Set(
      (cities as ICity[])
        .filter((item) =>
          item.name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
        )
        .slice(0, 5)
        .map((item) => item.name)
    )

    return Array.from(uniqueCities).map((name) => {
      const item = (cities as ICity[]).find((city) => city.name === name)
      if (item) {
        return <Item key={item.admin2} item={item} onSelect={handleSelect} />
      }
      return null
    })
  }, [handleSelect, value])

  console.log(itemList)

  return (
    <div className={cn('relative flex flex-col', className)}>
      <FormLine
        id={id}
        title={title}
        error={error}
        required={required}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsOpen(true)}
        {...props}
      />
      {itemList.length > 0 && isOpen && (
        <ul className="absolute top-24 z-[401] flex w-full flex-col gap-2 overflow-hidden rounded-md bg-white p-2 shadow-xl">
          {itemList}
        </ul>
      )}
    </div>
  )
}

export default DropDown
