import React, { useEffect } from 'react'
import Header from '../../foundations/Header/Header'
import Template from '../../foundations/Template/Template'
import CreateIndividualForm from '../../components/CreateIndividualForm/CreateIndividualForm'
import { GetLocations, getLocations } from '../../lib/api/example/getLocations'
import { useState } from 'react'

export type CreateIndividualProps = {}

function CreateIndividual({}: CreateIndividualProps) {
  const [locations, setLocations] = useState<GetLocations[]>([])

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const results = await getLocations()
        setLocations(results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchLocations()
  }, [])

  return (
    <Template header={<Header title="Create Individual Account" />}>
      <CreateIndividualForm />
      {/* 
      {locations?.map((result) =>
        !result.parentId ? (
          <div key={result.id}>
            <div>{result.name}</div>
            {result.children &&
              result.children.map((child) => (
                <div key={child.id}>
                  <div> + {child.name}</div>
                  {child.children?.map((child2) => (
                    <div> ++ {child2.name}</div>
                  ))}
                </div>
              ))}
          </div>
        ) : (
          ''
        )
      )} */}
    </Template>
  )
}

export default CreateIndividual
