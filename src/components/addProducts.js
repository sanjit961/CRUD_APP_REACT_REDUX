import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../actions/inventory";
const AddProduct = () => {
  const initialProductState = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "12345",
    phoneNumber: "dfsf",
    address: "dff",
    departmentId: 10,
    departmentName: "gh",
    countryId: 20,
    countryName: "dgf",
    roleId: 0,
    createdDate: "2022-06-13T06:05:24.356Z",
    modifyDate: "2022-06-13T06:05:24.356Z",
    createdBy: 2,
    modifyBy: 3,
    isActive: true,
    isDeleted: false,
  };
  const [products, setProducts] = useState(initialProductState);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProducts({ ...products, [name]: value });
  };
  const saveProducts = () => {
    const {
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
    } = products;
    dispatch(
      createProduct(
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
      )
    )
      .then((data) => {
        setProducts({
          userId: data.userId,
          firstName: data.firstName,
          lastName: data.lastName,
          emailAddress: data.emailAddress,
          password: data.password,
          phoneNumber: data.phoneNumber,
          address: data.address,
          departmentId: data.departmentId,
          countryId: data.countryId,
          countryName: data.countryName,
          roleId: data.roleId,
          stateId: data.stateId,
          createdDate: data.createdDate,
          modifyDate: data.modifyDate,
          createdBy: data.createdBy,
          modifyBy: data.modifyBy,
          isActive: data.isActive,
          isDeleted: data.isDeleted,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newProducts = () => {
    setProducts(initialProductState);
  };
  return (
    <>
      <div className="submit-form">
        <button className="btn btn-success" onClick={newProducts}>
          Add
        </button>
        <div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={products.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={products.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
            <label htmlFor=" emailAddress">Email Address</label>
            <input
              type="text"
              className="form-control"
              id="emailAddress"
              required
              value={products.emailAddress}
              onChange={handleInputChange}
              name="emailAddress"
            />
            <label htmlFor="phone">phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              required
              value={products.phoneNumber}
              onChange={handleInputChange}
              name="phone"
            />
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              value={products.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>
          <button onClick={saveProducts} className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
