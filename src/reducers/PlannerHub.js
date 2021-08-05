import { actions } from "../actions"
import { apiFetchPlanList, apiAddNewPlan, apiDeletePlan } from "../utils/mock_api"

const plannerHub = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_PLAN_LIST:
      // return [...JSON.parse(sessionStorage.planList)]
      // middleware fetch
      return apiFetchPlanList()

    case actions.ADD_NEW_PLAN:
      apiAddNewPlan(action.planObj)
      return apiFetchPlanList()
    
    case actions.DELETE_PLAN:
      apiDeletePlan(action.pid)
      return apiFetchPlanList()

    default:
      return state
  }
}

export default plannerHub