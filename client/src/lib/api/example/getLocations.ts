import client from '../client'

export async function getLocations() {
  const { data } = await client.get<GetLocations[]>('example/list')
  return data
}

export type GetLocations = {
  id: number
  name: string
  parentId?: number
  parent?: string
  children?: {
    id: number
    name: string
    parentId?: number
    children?: { id: number; name: string; parentId?: number }[]
  }[]
}
