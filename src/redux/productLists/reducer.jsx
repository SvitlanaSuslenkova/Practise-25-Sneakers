import * as a from "../actionTypes.jsx";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_TO_CART: {
      const existingProduct = state.find(
        (product) => product.idProduct === action.payload.idProduct
      );

      if (existingProduct) {
        return state.map((product) =>
          product.idProduct === action.payload.idProduct
            ? {
                ...product,
                numberItems:
                  product.numberItems.toString() +
                  `,` +
                  action.payload.numberItems.toString(),
                size: product.size + `,` + action.payload.size,
              }
            : product
        );
      } else {
        return [...state, action.payload];
      }
    }

    case a.DELETE_FROM_CART:
      return state.filter(
        (product) => product.idProduct !== action.payload.idProduct
      );

    default:
      return state;
  }
};
export default productReducer;
