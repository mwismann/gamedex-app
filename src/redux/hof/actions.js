import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://opencritic-api.p.rapidapi.com/game/hall-of-fame',
  headers: {
    'X-RapidAPI-Key': 'b2d7dd6a79mshd161d888c33a5ccp1ef11bjsn318c68207309',
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
  }
};

const getHallOfFame = createAsyncThunk(
  "hallOfFame/getHallOfFame",
  async () => {
    try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export default getHallOfFame;