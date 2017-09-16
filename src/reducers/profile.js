const user = (state={}, action) => {
  switch(action.type){
    case 'LOADING_USER_PROFILE':
      console.log('started loading userData')
      break;
    case 'LOADED_USER_PROFILE':
      return {...state,  user:action.data} 
    case 'LOADING_USER_PROFILE_FAILED':
      return {...state,  error:action.data} 
    default:
      break;
    };
  return state;
}


export default user;
