import {ID, Response} from '../../../../../../helpers'

export type Client = {
  id: ID
  name: string
  username: string
  email: string
}

export type ClientQueryResponse = Response<Array<Client>>

export const initialUser: Client = {
  id: 1,
  name: 'jp',
  username: 'jp_1',
  email: 'ar@gmail.com',
}
