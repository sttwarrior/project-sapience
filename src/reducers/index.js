import { combineReducers } from 'redux'
import plannerHub from "./PlannerHub"
import planTaskBoard from "./PlanTaskBoard"

export default combineReducers({
  plannerHub,
  planTaskBoard
})