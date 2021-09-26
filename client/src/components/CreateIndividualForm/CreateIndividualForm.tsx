import React, { useState } from 'react'
import Input from '../../foundations/Input/Input'
import { BiPackage } from 'react-icons/bi'
import styled from 'styled-components'
import MultiLocationSearch from '../Search/MultiLocationSearch'

export type CreateIndividualFormProps = {}

function CreateIndividualForm({}: CreateIndividualFormProps) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  return (
    <Form>
      <Input
        label="이름"
        value={name}
        setValue={setName}
        icon={<BiPackage />}
        error={error}
        placeholder="Primary Input Design"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="연락처"
        value={name}
        setValue={setName}
        icon={<BiPackage />}
        error={error}
        placeholder="Primary Input Design"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="주소"
        value={name}
        setValue={setName}
        icon={<BiPackage />}
        error={error}
        placeholder="Primary Input Design"
        onChange={(e) => setName(e.target.value)}
      />
      <MultiLocationSearch />
      <Input
        label="주소"
        value={name}
        setValue={setName}
        icon={<BiPackage />}
        error={error}
        placeholder="Primary Input Design"
        onChange={(e) => setName(e.target.value)}
      />
    </Form>
  )
}

export default CreateIndividualForm

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 16px;
`
