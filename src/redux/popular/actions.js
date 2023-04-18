import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://opencritic-api.p.rapidapi.com/game/popular',
  headers: {
    'X-RapidAPI-Key': 'b2d7dd6a79mshd161d888c33a5ccp1ef11bjsn318c68207309',
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
  },
};

const getPopular = createAsyncThunk(
  'popular/getPopular',
  async () => {
    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      return error;
    }
  },
);

export default getPopular;
