import { ADD_TASK } from '../constants/ActionTypes';

function tasks(state = [], action) {
  console.log('----------state-----------',state)
  console.log(action , '------action---')
  switch (action.type) {
    case ADD_TASK:
      return [...state,action.task];

    default :
        return state;
  }
}

export default tasks;
