import planModule from "./planModule"
import taskModule from "./taskModule"

export const apiUpdatePlanList = (planList) => {
  sessionStorage.setItem("planList", JSON.stringify(planList))
}

export const apiFetchPlanList = () => {
  return JSON.parse(sessionStorage.planList)
}

export const apiAddNewPlan = (planObj) => {
  const planList = apiFetchPlanList()
  planList.push(planModule(planObj))
  apiUpdatePlanList(planList)
}

export const apiDeletePlan = (pid) => {
  const planList = apiFetchPlanList()
  const planIndex = planList.findIndex((plan)=> plan.pid === pid)
  planList.splice(planIndex, 1)
  apiUpdatePlanList(planList)
}

export const apiFetchPlanInfo = (pidQuery) => {

  const planList = apiFetchPlanList()
  let planInfo = {}

  for (let plan of planList) {
    if(pidQuery === plan.pid) {
        planInfo = {...plan}
    }
  }
  return planInfo
}

export const apiAddNewTask = (taskObj, pid) => {
  const planList = apiFetchPlanList()
  const planIndex = planList.findIndex((plan)=> plan.pid === pid)
  planList[planIndex].tasks.push(taskModule(taskObj))
  apiUpdatePlanList(planList)
}

export const apiDeleteTask = (pid, tid)  => {
  const planList = apiFetchPlanList()
  const planIndex = planList.findIndex((plan)=> plan.pid === pid)
  const taskIndex = planList[planIndex].tasks.findIndex((task)=> task.tid === tid)
  planList[planIndex].tasks.splice(taskIndex, 1)
  apiUpdatePlanList(planList)
}