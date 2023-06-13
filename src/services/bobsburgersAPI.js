import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bobsburgersApi = createApi({
  reducerPath: 'bobsburgersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bobsburgers-api.herokuapp.com' }),
  endpoints: (builder) => ({
    getAllcharacters: builder.query({
      query: (page = 10) => `/characters?page=${page}`,
    }),
    getCharacterDetails: builder.query({
      query: (id) =>  `/characters/${id}`
    }),
    getEpisodes: builder.query({
      query: () => '/episodes',
    }),
  }),
})

export const { useGetAllcharactersQuery, useGetEpisodesQuery, useGetCharacterDetailsQuery } = bobsburgersApi

