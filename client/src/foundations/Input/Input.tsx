import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import openColor from './../../lib/openColor'
import { BiX } from 'react-icons/bi'

export type InputProps = {
  icon?: React.ReactNode
  label?: string
  value: string
  setValue?: Dispatch<SetStateAction<string>>
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>

function Input({
  icon,
  placeholder,
  label,
  value,
  setValue,
  onChange,
  error,
  ...rest
}: InputProps) {
  return (
    <InputBlock {...rest}>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        {icon && <Prefix>{icon}</Prefix>}
        <InputPlace
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          onChange={onChange}
          {...rest}
        />
        {value && (
          <ClearButton>
            <BiX />
          </ClearButton>
        )}
      </InputWrapper>
      {error && <Error>{error}</Error>}
    </InputBlock>
  )
}

export default Input

const InputBlock = styled.div``

const Label = styled.div`
  margin-bottom: 6px;
  font-weight: bold;
`
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  border: 1px solid ${openColor.gray[5]};
  border-radius: 5px;
  padding: 0 16px;
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

const InputPlace = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
`
const ClearButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: ${openColor.gray[6]};
`

const Error = styled.div``
