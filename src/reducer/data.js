import { actionsType } from '../actions/data';

import mockData from '../components/cascade/mock';

const defaultState = {
  data: mockData,
};

function deepCopy(src) {
  const dest = src instanceof Array ? [] : {};
  for (var i in src) {
    if (src.hasOwnProperty(i)) {
      if (typeof src[i] === 'object') dest[i] = deepCopy(src[i]);
      else dest[i] = src[i];
    }
  }
  return dest;
}

export default function data(state=defaultState, action) {
  switch(action.type) {
    case actionsType.ADD_CHILD:
      const data = deepCopy(state.data);
      data.forEach(item => {
        if (item.value === action.key) {
          item.children.push({
            value: action.value,
            label: action.label
          })
        }
      });

      return Object.assign({}, state, {data});
    default:
      return state;
  }
}