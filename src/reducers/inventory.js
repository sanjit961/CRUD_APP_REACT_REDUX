import {
  CREATE_PRODUCTS,
  GET_PRODUCTS,
  UPDATE_PRODUCTS,
  DELETE_PRODUCTS,
} from "../actions/types";
const initialState = [];
function productReducer(products = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PRODUCTS:
      return [...products, payload];
    case GET_PRODUCTS:
      return payload;
    case UPDATE_PRODUCTS:
      return products.map((products) => {
        if (products.id === payload.id) {
          return {
            ...products,
            ...payload,
          };
        } else {
          return products;
        }
      });
    case DELETE_PRODUCTS:
      return products.filter(({ id }) => id !== payload.id);
    default:
      return products;
  }
}
export default productReducer;
