import { connect } from 'react-redux'
import PlannerHub from '../components/PlannerHub'
import { fetchPlanList, deletePlan } from '../actions'

const mapStateToProps = state => ({
  planList: state.plannerHub
})

const mapDispatchToProps = dispatch => ({
  fetchPlanList: () => dispatch(fetchPlanList()),
  deletePlan: (pid) => dispatch(deletePlan(pid))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlannerHub)