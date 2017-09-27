import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './store/actions/actionCreators'
import Login from './components/Login-form'

const mapStateToProps = (state) => {
  return {
    name: state.submit.name,
    password: state.submit.password,
    token: state.submit.token,
    result: (state.getting) ? state.getting.result : null
  }
}

function mapDispachToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(Login)