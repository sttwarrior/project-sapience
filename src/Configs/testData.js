module.exports = {
  planList: [{title: "test1", pid:"p1"}, {title: "test2", pid:"p2"}],
  planTasks: {
    "p1": [
      {
        title: "To do", 
        tasks:[{item: "On board", completed: false, owner: "Ryan"}]
      },
      {
        title: "on-going",
        tasks:[]
      }
    ]
  }
};