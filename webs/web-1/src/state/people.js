import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './_base-query.ts';

const peopleTags = ['People'];

// reducers
export const peopleSlice = createApi({
  reducerPath: 'people',
  tagTypes: peopleTags,
  baseQuery,
  endpoints: builder => ({
    getPeople: builder.query({
      query: () => '/api-1/people',
      providesTags: peopleTags
    }),
    addPerson: builder.mutation({
      query: body => ({
        url: '/api-1/people',
        method: 'POST',
        body
      }),
      invalidatesTags: peopleTags
    }),
    deletePerson: builder.mutation({
      query: person => ({
        url: `/api-1/people/${person._id}`,
        method: 'DELETE'
      }),
      invalidatesTags: peopleTags
    })
  })
});

// hooks
export const { 
  useGetPeopleQuery,
  useAddPersonMutation,
  useDeletePersonMutation 
} = peopleSlice;
