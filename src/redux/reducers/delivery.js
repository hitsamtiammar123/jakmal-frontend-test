const initialStates = {
  email: '',
  dropshipperName: '',
  phoneNumber: '',
  dropshipperPhoneNumber: '',
  address: '',
  sendAsDropshipper: false,
};

function reducer(state = initialStates, action) {
  const { payload, type } = action;
  const actions = {
    SET_DELIVERY_DATA: () => ({
      ...state,
      [payload.key]: [payload.value],
    }),
    SET_DELIVERY_DATAS: () => ({
      ...state,
      ...payload,
    }),
    EMPTY_DELIVERY_DATA: () => ({
      ...state,
      email: '',
      dropshipperName: '',
      phoneNumber: '',
      dropShipperPhoneNumber: '',
      address: '',
      sendAsDropshipper: '',
    }),
  };

  return actions[type] ? actions[type]() : state;
}

const actions = {
  setValue: (payload) => ({
    type: 'SET_DELIVERY_DATA',
    payload,
  }),
  setValues: (payload) => ({
    type: 'SET_DELIVERY_DATAS',
    payload,
  }),
  emptyValues: () => ({
    type: 'EMPTY_DELIVERY_DATA',
  }),
};

export { actions };

export default reducer;
