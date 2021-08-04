import { connect } from 'react-redux'
import PlannerHub from '../components/PlannerHub'
import { fetchPlanList } from '../actions'

const mapStateToProps = state => ({
  planList: state.plannerHub
})

const mapDispatchToProps = dispatch => ({
  fetchPlanList: () => dispatch(fetchPlanList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlannerHub)