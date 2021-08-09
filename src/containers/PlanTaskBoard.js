import { connect } from 'react-redux'
import PlanTaskBoard from '../components/PlanTaskBoard/index'
import {
  fetchPlanInfo,
  addNewTask,
  deleteTask,
  updateBucketTitle,
  addNewBucket,
} from '../actions'

const mapStateToProps = state => ({
  planInfo: state.planTaskBoard
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlanInfo: () => dispatch(fetchPlanInfo(ownProps.pid)),
  addNewTask: (taskObj) => dispatch(addNewTask(ownProps.pid, taskObj)),
  deleteTask: (tid) => dispatch(deleteTask(ownProps.pid, tid)),
  updateBucketTitle: (bucketIdx, newBucketTitle) => dispatch(
    updateBucketTitle(ownProps.pid, bucketIdx, newBucketTitle)
  ),
  addNewBucket: (newBucketTitle) => dispatch(addNewBucket(ownProps.pid, newBucketTitle))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanTaskBoard)