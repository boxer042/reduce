import { BiSearch } from 'react-icons/bi'
import styled from 'styled-components'
import openColor from './../../lib/openColor'

export type AccountSearchSectionProps = {
  value: string
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

function AccountSearchSection({ value, onChange }: AccountSearchSectionProps) {
  return (
    <Container>
      <SearchInputBlock>
        <input
          value={value}
          onChange={onChange}
          placeholder="이름 또는 연락처 검색"
        />
        <SearchButton>
          <BiSearch />
        </SearchButton>
      </SearchInputBlock>
    </Container>
  )
}

export default AccountSearchSection

const Container = styled.div`
  max-width: 768px;
  width: 100%;

  padding: 0 16px 16px 16px;
  background-color: #fff;
`

const SearchInputBlock = styled.div`
  border: 1px solid ${openColor.gray[3]}; // #DDDDDD
  min-height: 64px;
  width: 100%;
  border-radius: 32px;
  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%);
  display: flex;
  padding: 8px 8px 8px 32px;
  input {
    border: none;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
  }
`

const SearchButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  min-height: 48px;
  min-width: 48px;
  background-color: ${openColor.blue[9]}; //#ff385c;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 24px;
  }
`
const CreateBlock = styled.div`
  margin-top: 16px;
  padding-left: 38px;
  font-size: 18px;
`

const FilterBlock = styled.div`
  padding-top: 16px;
`
