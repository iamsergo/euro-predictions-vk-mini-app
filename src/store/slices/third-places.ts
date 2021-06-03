import { createSlice } from "@reduxjs/toolkit";
import { Checkable } from "../../types/Checkable";

import { Team } from "../../types/Team";

interface thirdPlacesState
{
  thirdPlaces: Checkable<Team>[]
}

const initialState: thirdPlacesState = {
  thirdPlaces: [],
}

const thirdPlacesSlice = createSlice({
  name: 'thirdPlaces',
  initialState,
  reducers: {
    setThirdPlaces(state, action)
    {
      state.thirdPlaces = action.payload
    },
  }
})

export const { setThirdPlaces } = thirdPlacesSlice.actions
export default thirdPlacesSlice.reducer