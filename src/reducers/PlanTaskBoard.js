import { actions } from "../actions"
import {
  apiFetchPlanInfo,
  apiAddNewTask,
  apiDeleteTask,
  apiUpdateBucketTitle,
  apiAddNewBucket
} from "../utils/mock_api"

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

    case actions.UPDATE_BUCKET_TITLE:
      apiUpdateBucketTitle(action.pid, action.bucketIdx, action.newBucketTitle)
      return apiFetchPlanInfo(action.pid)

    case actions.ADD_NEW_BUCKET:
      apiAddNewBucket(action.pid, action.newBucketTitle)
      return apiFetchPlanInfo(action.pid)

    default:
      return state
  }
}

export default planTaskBoard