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

export const apiFetchPlanInfo = (pid) => {

  const planList = apiFetchPlanList()
  const planIndex = planList.findIndex((plan)=> plan.pid === pid)

  return planList[planIndex]
}

export const apiAddNewTask = (taskObj, pid) => {
  const planList = apiFetchPlanList()
  const planIndex = planList.findIndex((plan)=> plan.pid === pid)
  console.log(taskObj, pid)
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

export const apiUpdateBucketTitle = (pid, bucketIdx, newBucketTitle) => {
  const planList = apiFetchPlanList()
  const planIndex = planList.findIndex((plan)=> plan.pid === pid)
  const tarPlan = planList[planIndex]
  for (let task of tarPlan.tasks) {
    if(task.bucket === tarPlan.buckets[bucketIdx]) {
      task.bucket = newBucketTitle
    }
  }
  tarPlan.buckets[bucketIdx] = newBucketTitle
  apiUpdatePlanList(planList) 
}

export const apiAddNewBucket = (pid, newBucketTitle) => {
  const planList = apiFetchPlanList()
  const planIndex = planList.findIndex((plan)=> plan.pid === pid)
  const tarPlan = planList[planIndex]
  
  tarPlan.buckets.push(newBucketTitle)
  apiUpdatePlanList(planList) 
}