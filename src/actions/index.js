import { enums } from "../configs"

export const actions = {
  FETCH_PLAN_LIST: enums.FETCH_PLAN_LIST,
  FETCH_PLAN_INFO: enums.FETCH_PLAN_INFO,
  ADD_NEW_TASK: enums.ADD_NEW_TASK,
  DELETE_TASK: enums.DELETE_TASK,
}

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
