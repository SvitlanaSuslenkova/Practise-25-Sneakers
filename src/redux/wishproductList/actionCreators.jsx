import * as a from "../actionTypes";
export const addToWishCart = (idProduct, numberItems, size) => {
  return {
    type: a.ADD_TO_WISH_CART,
    payload: { idProduct, numberItems, size },
  };
};

export const deleteFromWishCart = (idProduct) => {
  return {
    type: a.DELETE_FROM_WISH_CART,
    payload: { idProduct },
  };
};
