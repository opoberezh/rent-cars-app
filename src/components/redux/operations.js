import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65734e99192318b7db41e85d.mockapi.io/api';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/adverts', {
        params: {
          page: 1,
          limit: 12,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredAdverts = createAsyncThunk(
  'adverts/filteredAdverts',
  async ({ make, price }, thunkAPI) => {
    const filter = (make !== null && make) || (price !== null && price);

    try {
      const response = await axios.get(`/adverts/${filter}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
