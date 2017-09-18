const user = (state={}, action) => {
  switch(action.type){
    case 'LOADING_USER_PROFILE':
      console.log('started loading userData')
      break;
    case 'LOADED_USER_PROFILE':
      let selected = []
      selected.push(action.data.metrics[0])
      let user = action.data
      user.metrics = user.metrics
        .sort((a,b)=> a.year -b.year)
      user.metrics.map(metrics => {
       return (metrics.percent = metrics.percent * 100) && (metrics.grow_units = metrics.grow_units * 100)
      })
      return {...state,  user, selected} 
    case 'LOADING_USER_PROFILE_FAILED':
      return {...state,  error:action.data} 
    case 'UPDATE_SELECTED_METRICS':
      let selectedMetrics = []
      selectedMetrics.push(action.data)
      return {...state,  selected:selectedMetrics} 
    default:
      break;
    };
  return state;
}


export default user;
