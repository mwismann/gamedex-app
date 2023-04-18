import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getGame = createAsyncThunk(
  'gameDetails/getGame',
  async (gameId) => {
    try {
      const { data } = await axios.request({
        method: 'GET',
        url: `https://opencritic-api.p.rapidapi.com/game/${gameId}`,
        headers: {
          'X-RapidAPI-Key': 'b2d7dd6a79mshd161d888c33a5ccp1ef11bjsn318c68207309',
          'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
        },
      });
      return data;
    } catch (error) {
      return error;
    }
  },
);

export default getGame;
