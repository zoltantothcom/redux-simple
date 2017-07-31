import { FEATCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FEATCH_WEATHER:
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }

  return state;
}
