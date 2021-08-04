import { actions } from "../actions"
import { apiFetchPlanList } from "../utils/mock_api"

const plannerHub = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_PLAN_LIST:
      // return [...JSON.parse(sessionStorage.planList)]
      // middleware fetch
      return apiFetchPlanList()

    default:
      return state
  }
}

export default plannerHub