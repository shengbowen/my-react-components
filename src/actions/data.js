export const actionsType = {
  ADD_CHILD: 'ADD_CHILD',
}

const addChild = (key, value, label) => {
  return {
    type: actionsType.ADD_CHILD,
    key,
    value,
    label
  }
}

export const actions = {
  addChild
}