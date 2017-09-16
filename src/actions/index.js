import loadUserProfile from '../api/index'

export const LOAD_USER_PROFILE = 'LOAD_USER_PROFILE'

export const loadUserData = () => ({
    type: 'PROMISE',
    actions: ['LOADING_USER_PROFILE', 'LOADED_USER_PROFILE', 'LOADING_USER_PROFILE_FAILED'],
    promise: loadUserProfile()
  })

  