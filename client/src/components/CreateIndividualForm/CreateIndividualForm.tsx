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
        label="Primary Input Design"
        value={name}
        setValue={setName}
        icon={<BiPackage />}
        error={error}
        placeholder="Primary Input Design"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Primary Input Design"
        value={name}
        setValue={setName}
        icon={<BiPackage />}
        error={error}
        placeholder="Primary Input Design"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MultiLocationSearch />
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </Form>
  )
}

export default CreateIndividualForm

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-content: flex-start;
  justify-content: flex-start; */
`
