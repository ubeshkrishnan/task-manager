import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Url } from "../../../Global_variable/api_link";

const initialState = {
    taskCard:[]
};

export const getExperienceApi = createAsyncThunk("get/taskcard",async (payload, thunkAPI) => {
  try {
    console.log("api")
    const url = Url + "taskcard";
    const response = await axios.get(url);
    console.log(response,'response');
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const counterSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    increment: (state) => {},
    extraReducers: {
        [getExperienceApi.fulfilled]:(state,action) =>{
            console.log(action,"action");
            state.taskCard = action.payload
        }
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
