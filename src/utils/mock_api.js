import taskModule from "./taskModule"

export const apiFetchPlanList = () => {
  return JSON.parse(sessionStorage.planList)
}

export const apiUpdatePlanList = (planList) => {
  sessionStorage.setItem("planList", JSON.stringify(planList))
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