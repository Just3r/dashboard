import { browserHistory } from 'react-router';

const middleware = store => next => action  => {    
    if(action.type !== 'PROMISE') {
        return next(action)
    }
    const [startAction, successAction, failureAction] = action.actions
    store.dispatch({
        type: startAction
    })
    action.promise
        .then(data => store.dispatch({
            type:successAction,
            data
        }))
        .then(res => {
            if(action.url) browserHistory.push(action.url)
        })
        .catch(error => store.dispatch({
            type: failureAction,
            error
        }))
    
}

export default middleware;