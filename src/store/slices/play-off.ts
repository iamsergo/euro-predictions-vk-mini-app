import { createSlice } from "@reduxjs/toolkit";

import { EuroPair } from "../../types/EuroPair";

interface GroupsState
{
  pairs8: EuroPair[]
  pairs4: EuroPair[]
  pairs2: EuroPair[]
  pairs1: EuroPair[]
}

const initialState: GroupsState = {
  pairs8: [],
  pairs4: [],
  pairs2: [],
  pairs1: [],
}

const playOffSlice = createSlice({
  name: 'playOff',
  initialState,
  reducers: {
    setPairs8(state, action)
    {
      state.pairs8 = action.payload
    },
    setPairs4(state, action)
    {
      state.pairs4 = action.payload
    },
    setPairs2(state, action)
    {
      state.pairs2 = action.payload
    },
    setPairs1(state, action)
    {
      state.pairs1 = action.payload
    },
  }
})

export const { setPairs1, setPairs2, setPairs4, setPairs8 } = playOffSlice.actions
export default playOffSlice.reducer