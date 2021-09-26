import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled, { css } from 'styled-components'
import openColor from './../../lib/openColor'
import { BiX } from 'react-icons/bi'

type SelectItemProps = {
  children: string
  index: number
  selectedIndex: number
}

export function SelectItem({
  children,
  selectedIndex,
  index,
}: SelectItemProps) {
  return <Item selected={index === selectedIndex}>{children}</Item>
}

export type InputProps = {
  children: React.ReactNode
  icon?: React.ReactNode
  label?: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  isSelected: string[]
  setIsSelected: Dispatch<SetStateAction<string[]>>
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectedIndex: number
  setSelectedIndex: Dispatch<SetStateAction<number>>
  isEnter?: (selected: string | Object) => void
  dataList: Object[]
} & React.InputHTMLAttributes<HTMLInputElement>

function MultiSelect({
  children,
  icon,
  placeholder,
  label,
  value,
  setValue,
  isSelected,
  setIsSelected,
  onChange,
  error,
  selectedIndex,
  setSelectedIndex,
  isEnter,
  dataList,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const itemListRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      setSelectedIndex(-2)
    }
  }, [open, setSelectedIndex])

  useEffect(() => {
    if (!value) {
      return setOpen(false)
    }
    setOpen(true)
  }, [value])

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) return
    e.preventDefault()
    switch (e.key) {
      case 'ArrowUp':
        if (selectedIndex - 1 === -2 || selectedIndex === -2) {
          setSelectedIndex(-2)
          return
        }
        setSelectedIndex(selectedIndex - 1)
        if (!itemListRef.current) return
        if (
          itemListRef.current.scrollTop >
          itemListRef.current.children[0].clientHeight * selectedIndex
        ) {
          itemListRef.current.scrollBy(
            0,
            -itemListRef.current.children[0].clientHeight
          )
        }
        return

      case 'ArrowDown':
        if (selectedIndex === dataList.length - 1) {
          return
        }
        setSelectedIndex(selectedIndex + 1)

        if (!itemListRef.current) return
        if (
          itemListRef.current.clientHeight + itemListRef.current.scrollTop <
          itemListRef.current.children[0].clientHeight * (selectedIndex + 3)
        ) {
          itemListRef.current.scrollBy(
            0,
            itemListRef.current.children[0].clientHeight
          )
        }
        return

      case 'Enter':
        if (selectedIndex === -1 || selectedIndex === -2) {
          return console.log(value)
        }
        const selected = dataList?.[selectedIndex]
        if (!isEnter) {
          return
        }
        isEnter(selected)
        return
    }
  }

  const autoInputCal = () => {
    if (value.replace(/[a-z0-9]|[ [\]{}()<>?|`~!@#$%^&*-_+=,.;:"'\\]/g, '')) {
      //한글만 입력가능 ㄱㄴ 포함
      return value.length * 16
    }
    return value.length * 8
  }

  return (
    <MultiSelectBlock {...rest}>
      {label && <Label>{label}</Label>}
      <InputWrapper
        onClick={() => {
          inputRef.current?.focus()
          setOpen(!open)
        }}
      >
        {icon && <Prefix>{icon}</Prefix>}
        <SelectWrapper>
          {isSelected &&
            isSelected.map((item, i) => (
              <SelectedItem key={i} onClick={(e) => e.stopPropagation()}>
                <div className="label">{item}</div>
                <div className="removeIcon">
                  <BiX />
                </div>
              </SelectedItem>
            ))}
          <InputPlace
            value={value}
            placeholder={placeholder}
            autoComplete="off"
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoWidth={autoInputCal()}
            ref={inputRef}
            {...rest}
          />
        </SelectWrapper>

        {value && (
          <ClearButton>
            <BiX />
          </ClearButton>
        )}
      </InputWrapper>
      {error && <Error>{error}</Error>}
      {open && (
        <ItemList ref={itemListRef} onKeyDown={(e) => e.stopPropagation()}>
          {children}
        </ItemList>
      )}
    </MultiSelectBlock>
  )
}

export default MultiSelect

const MultiSelectBlock = styled.div`
  margin: 8px 0;
  position: relative;
`

const Label = styled.div`
  margin-bottom: 6px;
`
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 3rem;
  border: 1px solid ${openColor.gray[5]};
  border-radius: 5px;
  padding: 8px 16px;
  align-items: center;
  &:focus-within {
    border: 1px solid ${openColor.gray[8]};
  }
`
const Prefix = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-right: 8px;
  color: ${openColor.gray[6]};
`

const InputPlace = styled.input<{ autoWidth?: number }>`
  outline: none;
  border: none;
  font-size: 16px;
  width: calc(16px + ${(props) => props.autoWidth}px);
`
const ClearButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: ${openColor.gray[6]};
`

const Error = styled.div``

const ItemList = styled.div`
  position: absolute;
  width: 100%;
  max-height: 172px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.2);
  margin-top: 8px;
  margin-bottom: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-padding-bottom: 4px;
  scroll-padding-top: 4px;
`

const Item = styled.div<{ selected: boolean }>`
  padding: 8px 18px;
  min-height: 3rem;
  display: flex;
  align-items: center;
  ${(props) =>
    props.selected &&
    css`
      background: ${openColor.gray[2]};
    `}
`

const SelectWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-wrap: wrap;
  overflow: hidden;
  align-content: center;
`
const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  padding: 2px 6px;
  background: ${openColor.gray[3]};
  border: 1px solid ${openColor.gray[6]};
  margin: 3px;
  .label {
    font-size: 12px;
  }
  .removeIcon {
    line-height: 12px;
  }
`
