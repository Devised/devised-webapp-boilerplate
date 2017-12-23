import { connect } from 'react-redux'
import App from '../app'
import { something } from './actions'

const mapStateToProps = (state, ownProps) => {
  return {
    //
    // Add props here
    //
    app: state.app,
    ...ownProps
  }
}

const Container = connect(
  mapStateToProps, {
    something
  }
)(App);

export default Container
