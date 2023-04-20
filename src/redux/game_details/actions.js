import { createAsyncThunk } from '@reduxjs/toolkit';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b2d7dd6a79mshd161d888c33a5ccp1ef11bjsn318c68207309',
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
  },
};

const getGame = createAsyncThunk(
  'gameDetails/getGame',
  async (gameId) => {
    try {
      const response = await fetch(`https://opencritic-api.p.rapidapi.com/game/${gameId}`, options);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

export default getGame;
