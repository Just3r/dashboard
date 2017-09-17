import loadUserProfile from '../api/index'

export const LOAD_USER_PROFILE = 'LOAD_USER_PROFILE'
export const SELECT_METRICS_YEAR = 'SELECT_METRICS_YEAR'
export const loadUserData = () => ({
    type: 'PROMISE',
    actions: ['LOADING_USER_PROFILE', 'LOADED_USER_PROFILE', 'LOADING_USER_PROFILE_FAILED'],
    promise: loadUserProfile()
  })

export const selectMetricsYear = (metrics={}) => ({
    type: 'UPDATE_SELECTED_METRICS',
    data:metrics
  })

  