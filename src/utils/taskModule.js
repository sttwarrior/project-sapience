const tidGenerator = () => (Math.random() + 1).toString(36).substring(7)

const taskModule = (task) => ({
    bucket: task?.bucket || "",
    tid: tidGenerator(),
    taskTitle: task?.taskTitle || "",
    timeStamp: task?.timeStamp || "",
    progress: "Not Started", //Not Started, In progress, Completed
    priority: task?.priority || "", //Low, Medium, High
    startDate: task?.startDate || "", //Date Obj
    dueDate: task?.dueDate || "",   //Date Obj && Not earlier than 
    checklist: task?.checklist || [], // Array of { Strings, Completed(Bool) } 
});

export default taskModule