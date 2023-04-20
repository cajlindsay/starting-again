import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiClient from '@starting-again/web-common/src/api-client.js';

// thunks
export const fetchCars = createAsyncThunk(
  'cars/fetch', // id
  async () => {
    const response = await apiClient.get('/api-1/cars');
    return response.data;
  }
);

export const addCar = createAsyncThunk(
  'cars/add', // id
  async (payload) => {
    const response = await apiClient.post('/api-1/cars', payload);
    return response.data;
  }
);

export const deleteCar = createAsyncThunk(
  'cars/delete', // id
  async (payload) => {
    const response = await apiClient.delete(`/api-1/cars/${payload._id}`);
    return response.data;
  }
);

// reducers
export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    /* onFetchSuccess(state, action) {
      state.items = action.payload;
    } */
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addCar.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCar.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(addCar.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(deleteCar.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCar.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(deleteCar.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

// selectors
export const selectCars = (state) => state.cars.items;
