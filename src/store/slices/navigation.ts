import { createSlice } from "@reduxjs/toolkit";
import { GROUP_PREDICTOR_PANEL, MAIN_PANEL } from "../../constants/panels";
import { PanelName } from "../../types/PanelName";

interface NavigationState
{
  currentPanel: PanelName
}

const initialState: NavigationState = {
  currentPanel: MAIN_PANEL,
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    goTo(state, action)
    {
      state.currentPanel = action.payload
    },
  },
})

export const { goTo } = navigationSlice.actions
export default navigationSlice.reducer