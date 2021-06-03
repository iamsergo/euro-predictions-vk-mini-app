import { createSlice } from "@reduxjs/toolkit";

import { EuroGroup } from "../../types/EuroGroup";

import GROUPS from '../../data/groups.json'

interface GroupsState
{
  groups: EuroGroup[]
}

const initialState: GroupsState = {
  groups: GROUPS as EuroGroup[],
}

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setGroups(state, action)
    {
      state.groups = action.payload
    },
  }
})

export const { setGroups } = groupsSlice.actions
export default groupsSlice.reducer