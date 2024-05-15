import * as a from "../actionTypes";
export const addToCart = (idProduct, numberItems, size) => {
  return {
    type: a.ADD_TO_CART,
    payload: { idProduct, numberItems, size },
  };
};

export const deleteFromCart = (idProduct) => {
  return {
    type: a.DELETE_FROM_CART,
    payload: { idProduct },
  };
};
