import { actionsType } from '../actions/data';

import mockData from '../components/cascade/mock';

const defaultState = {
  data: mockData,
};

export default function data(state=defaultState, action) {
  switch(action.type) {
    case actionsType.ADD_CHILD:
      const data = state.data.slice(0);
      data.forEach(item => {
        if (item.value === action.key) {
          item.children = item.children.concat({
            value: action.value,
            label: action.label
          })
        }
      });

      return Object.assign({}, {data});
    default:
      return state;
  }
}