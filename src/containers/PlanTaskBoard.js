import { connect } from 'react-redux'
import PlanTaskBoard from '../components/PlanTaskBoard'
import { fetchPlanInfo, addNewTask, deleteTask } from '../actions'

const mapStateToProps = state => ({
  planInfo: state.planTaskBoard
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlanInfo: () => dispatch(fetchPlanInfo(ownProps.pid)),
  addNewTask: (taskObj) => dispatch(addNewTask(taskObj, ownProps.pid)),
  deleteTask: (tid) => dispatch(deleteTask(ownProps.pid, tid))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanTaskBoard)