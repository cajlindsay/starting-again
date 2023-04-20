import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBearerToken } from '@starting-again/web-common/src/auth.js';

const { VITE_API_URL } = window.env;

export default fetchBaseQuery({
  baseUrl: VITE_API_URL,
  prepareHeaders: async (headers) => {
    const bearerToken = await getBearerToken();
    headers.set('authorization', `Bearer ${bearerToken}`);
    return headers;
  }
});
