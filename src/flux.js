import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import {persistStore, persistCombineReducers} from 'redux-persist'
import {PersistGate} from 'redux-persist/lib/integration/react'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'

//
// Import reducers from each module. This could
// be moved to another file if it gets to unwieldy.
// However, ideally we could implement a way for
// each module to register it's reducers instead
// of importing them.
//
import app from './modules/app/flux/reducers';

/**
 * Create the reducers
 */
const reducers = () => {
  return persistCombineReducers({
    key: 'root',
    storage,
    //
    // We black list config so that it
    // is not persisted.
    //
    blacklist: [
      'config'
    ],
    debug: true
  }, {
    //
    // We define an empty reducer for
    // the config so that we have a storage
    // namespace for the config
    //
    config: (state = {}) => state,
    //
    // Other reducers
    //
    app,
  })
}

/**
 * Create the enhancers
 */
const enhancers = () => {
  return compose(
    applyMiddleware(
      thunk
    )
  )
}

/**
 * Create the store
 */
const store = (initialState) => {
  return createStore(
    reducers(),
    initialState,
    enhancers(),
  )
}

/**
 * Add persistence to the store. We must wait
 * for rehydration before rendering the UI so
 * we return a promise that is resolved when
 * ready.
 */
const persist = (store) => {
  return {
    store,
    persistor: persistStore(store)
  }
}

/**
 * This component initalizes the flux configuration.
 * It will wait until the store is ready before rendering
 * its children.
 */
export default class Flux extends React.Component {

  /**
   * constructor
   */
  constructor(props){
    super(props);
    //
    // Create a store, add persistence, and
    // save it to our state
    //
    this.state = persist(store(props.initialState));
  }

  /**
   * render
   */
  render() {
    return (
      <PersistGate persistor={this.state.persistor}>
        <Provider store={this.state.store}>
          {this.props.children}
        </Provider>
      </PersistGate>
    );
  }
};
