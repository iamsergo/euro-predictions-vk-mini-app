import { Game } from "../../types/Game";

import games from '../../data/games.json'
import { createSlice } from "@reduxjs/toolkit";

interface GamesState
{
  games: Game[]
  selectedGame: Game | null
}

const initialState: GamesState = {
  games,
  selectedGame: null,
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    selectGame(state,action)
    {
      state.selectedGame = action.payload
    },
  },
})

export const { selectGame, } = gamesSlice.actions
export default gamesSlice.reducer