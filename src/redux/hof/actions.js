import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

const options = {
  method: 'GET',
  url: 'https://opencritic-api.p.rapidapi.com/game/hall-of-fame',
  headers: {
    'X-RapidAPI-Key': `${RAPID_API_KEY}`,
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
  },
};

const getHallOfFame = createAsyncThunk(
  'hallOfFame/getHallOfFame',
  async () => {
    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      return error;
    }
  },
);

export default getHallOfFame;
