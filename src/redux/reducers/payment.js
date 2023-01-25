const initialStates = {
  shipment: {
    name: '',
    price: 0,
    estimate: '',
    shipmentIndex: -1,
  },
  payment: {
    name: '',
    paymentIndex: -1,
  },
};

function reducer(state = initialStates, action) {
  const { payload, type } = action;
  const actions = {
    SET_SHIPMENT_DATA: () => ({
      ...state,
      shipment: {
        name: payload.name,
        price: payload.price,
        estimate: payload.estimate,
        shipmentIndex: payload.shipmentIndex,
      },
    }),
    SET_PAYMENT_DATA: () => ({
      ...state,
      payment: {
        name: payload.name,
        paymentIndex: payload.paymentIndex,
      },
    }),
    EMPTY_SHIPMENT_DATA: () => ({
      ...state,
      shipment: {
        name: '',
        price: 0,
        estimate: '',
        shipmentIndex: -1,
      },
    }),
    EMPTY_PAYMENT_DATA: () => ({
      ...state,
      payment: {
        name: '',
        paymentIndex: -1,
      },
    }),
  };

  return actions[type] ? actions[type]() : state;
}

const actions = {
  setShipmentData: (payload) => ({
    type: 'SET_SHIPMENT_DATA',
    payload,
  }),
  setPaymentData: (payload) => ({
    type: 'SET_PAYMENT_DATA',
    payload,
  }),
  emptyShipmentData: () => ({
    type: 'EMPTY_SHIPMENT_DATA',
  }),
  emptyPaymentData: () => ({
    type: 'EMPTY_PAYMENT_DATA',
  }),
};

export { actions };

export default reducer;
