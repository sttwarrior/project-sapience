import { actions } from "../actions"
import { apiFetchPlanInfo, apiAddNewTask, apiDeleteTask } from "../utils/mock_api"
import taskModule from "../utils/taskModule"

const planTaskBoard = (state = {}, action) => {

  switch (action.type) {

    case actions.FETCH_PLAN_INFO:
      return apiFetchPlanInfo(action.pid)

    case actions.ADD_NEW_TASK:
      apiAddNewTask(action.taskObj, action.pid)
      return apiFetchPlanInfo(action.pid)

    case actions.DELETE_TASK:
      apiDeleteTask(action.pid, action.tid)
      return apiFetchPlanInfo(action.pid)
  
    default:
      return state
  }
}

export default planTaskBoard