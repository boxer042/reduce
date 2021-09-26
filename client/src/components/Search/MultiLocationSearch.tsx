import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import MultiSelect, { SelectItem } from '../../foundations/Select/MultiSelect'
import openColor from '../../lib/openColor'

const locationMap = [
  { id: 1, name: '전국' },
  { id: 2, name: '서울' },
  { id: 3, name: '부산' },
  { id: 4, name: '대구' },
  { id: 5, name: '대전' },
  { id: 6, name: '세종' },
  { id: 7, name: '울산' },
]

export type MultiLocationSearchProps = {}

function MultiLocationSearch({}: MultiLocationSearchProps) {
  const [keyword, setKeyword] = useState('')
  const [isSelected, setIsSelected] = useState<string[]>([
    '전국',
    '대전',
    '세종',
    '울산',
    '부산',
    '대구',
    '광주',
    '영동',
    '보은',
    '금산',
  ])
  const [selectedIndex, setSelectedIndex] = useState(-2)

  const isEnter = (selected: string | Object) => {
    return console.log('테스트', selected)
  }

  return (
    <MultiSelect
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      label="사용지역"
      value={keyword}
      setValue={setKeyword}
      isSelected={isSelected}
      setIsSelected={setIsSelected}
      onChange={(e) => setKeyword(e.target.value)}
      isEnter={(selected) => isEnter(selected)}
      dataList={locationMap}
    >
      <SelectItem index={-1} selectedIndex={selectedIndex}>
        {keyword}
      </SelectItem>
      {locationMap.map((item, i) => (
        <SelectItem key={i} index={i} selectedIndex={selectedIndex}>
          {item.name}
        </SelectItem>
      ))}
    </MultiSelect>
  )
}

export default MultiLocationSearch
