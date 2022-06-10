// `use strict`;
// Нужній юзер по айди статус диактиивейтєд
const ACTIVATED_TYPE = "activated";
const DEACTIVATED_TYPE = "diactivated";

const initialState = {
  entities: [
    { name: "test", status: ACTIVATED_TYPE, id: 0 },
    { name: "test", status: ACTIVATED_TYPE, id: 1 },
    { name: "test", status: ACTIVATED_TYPE, id: 2 },
    { name: "test", status: ACTIVATED_TYPE, id: 3 },
    { name: "test", status: ACTIVATED_TYPE, id: 4 },
  ],
  loading: false,
  huynya: {},
};

const activateDeactivate = (state, action) => {
  const newArr = state.entities.map((el) => {
    if (el.id === action.payload.id) {
      return { ...el, status: action.type };
    }
    return el;
  });
  return { ...state, entities: newArr };
};

const newState = activateDeactivate(initialState, {
  type: DEACTIVATED_TYPE,
  payload: { id: 2 },
});
console.log(newState);
console.log(
  activateDeactivate(newState, { type: ACTIVATED_TYPE, payload: { id: 2 } })
);

