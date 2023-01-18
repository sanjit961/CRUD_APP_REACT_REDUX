import {
  CREATE_PRODUCTS,
  GET_PRODUCTS,
  UPDATE_PRODUCTS,
  DELETE_PRODUCTS,
} from "./types";
import ProductServices from "../services/productServices";
export const createProduct =
  (
    userId,
    firstName,
    lastName,
    emailAddress,
    password,
    phoneNumber,
    address,
    departmentId,
    countryId,
    countryName,
    roleId,
    createdDate,
    modifyDate,
    createdBy,
    modifyBy,
    isActive,
    isDeleted
  ) =>
  async (dispatch) => {
    try {
      const res = await ProductServices.create({
        userId,
        firstName,
        lastName,
        emailAddress,
        password,
        phoneNumber,
        address,
        departmentId,
        countryId,
        countryName,
        roleId,
        createdDate,
        modifyDate,
        createdBy,
        modifyBy,
        isActive,
        isDeleted,
      });
      dispatch({
        type: CREATE_PRODUCTS,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const getProducts = () => async (dispatch) => {
  try {
    const res = await ProductServices.getAll();
    console.log(res.data.data);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProducts = (id, data) => async (dispatch) => {
  try {
    const res = await ProductServices.update(id, data);
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteProducts = (id) => async (dispatch) => {
  try {
    await ProductServices.delete(id);
    dispatch({
      type: DELETE_PRODUCTS,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

