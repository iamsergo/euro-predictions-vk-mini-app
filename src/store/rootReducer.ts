import { combineReducers } from "@reduxjs/toolkit"

import navigation from './slices/navigation'
import groups from './slices/groups'
import thirdPlaces from './slices/third-places'
import playOff from './slices/play-off'


const rootReducer = combineReducers({
  navigation,
  groups,
  thirdPlaces,
  playOff,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer