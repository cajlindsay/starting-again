import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './_base-query.js';

// reducers
export const peopleSlice = createApi({
  reducerPath: 'people',
  tagTypes: ['People'],
  baseQuery,
  endpoints: builder => ({
    getPeople: builder.query({
      query: () => '/api-1/people',
      providesTags: ['People']
    }),
    addPerson: builder.mutation({
      query: body => ({
        url: '/api-1/people',
        method: 'POST',
        body
      }),
      invalidatesTags: ['People']
    }),
    deletePerson: builder.mutation({
      query: person => ({
        url: `/api-1/people/${person._id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['People']
    })
  })
});

// hooks
export const { 
  useGetPeopleQuery,
  useAddPersonMutation,
  useDeletePersonMutation 
} = peopleSlice;
