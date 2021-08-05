import { enums } from "../configs"

export const actions = {
  ADD_NEW_PLAN: enums.ADD_NEW_PLAN,
  DELETE_PLAN: enums.DELETE_PLAN,
  FETCH_PLAN_LIST: enums.FETCH_PLAN_LIST,
  FETCH_PLAN_INFO: enums.FETCH_PLAN_INFO,
  ADD_NEW_TASK: enums.ADD_NEW_TASK,
  DELETE_TASK: enums.DELETE_TASK,
}

export const addNewPlan = (planObj) => ({
  type: actions.ADD_NEW_PLAN,
  planObj
})

export const deletePlan = (pid) => ({
  type: actions.DELETE_PLAN,
  pid,
})

export const fetchPlanList = () => ({
  type: actions.FETCH_PLAN_LIST,
})

export const fetchPlanInfo = (pid) => ({
  type: actions.FETCH_PLAN_INFO,
  pid: pid
})

export const addNewTask = (taskObj, pid) => ({
  type: actions.ADD_NEW_TASK,
  taskObj,
  pid
})

export const deleteTask = (pid, tid) => ({
  type: actions.DELETE_TASK,
  pid,
  tid
})
