const initialStates = {
  amount: 10,
  price: 500000,
  orderID: '',
};

function reducer(state = initialStates, action) {
  const { type, payload } = action;
  const actions = {
    SET_ORDER_ID: () => ({
      ...state,
      orderID: payload,
    }),
  };

  return actions[type] ? actions[type]() : state;
}

const actions = {
  setOrderId: (payload) => ({
    type: 'SET_ORDER_ID',
    payload,
  }),
};

export { actions };

export default reducer;
