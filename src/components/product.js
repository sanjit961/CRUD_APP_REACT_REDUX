import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProducts, deleteProducts } from "../actions/inventory";
import productServices from "../services/productServices";
const Products = (props) => {
  const initialProductState = {
    userId: null,
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    phoneNumber: "",
    address: "",
    departmentId: "",
    countryId: "",
    countryName: "",
    roleId: "",
    createdDate: "",
    modifyDate: "",
    createdBy: "",
    modifyBy:"",
    isActive:true,
    isDeleted:false,
    published: false
  };
  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const getProducts = id => {
    productServices.get(id)
      .then(response => {
        setCurrentProduct(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getProducts(props.match.params.id);
  }, [props.match.params.id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };
  const updateStatus = status => {
    const data = {
      id: currentProduct.id,
      title: currentProduct.title,
      description: currentProduct.description,
      published: status
    };
    dispatch(updateProducts(currentProduct.id, data))
      .then(response => {
        console.log(response);
        setCurrentProduct({ ...currentProduct, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const updateContent = () => {
    dispatch(updateProducts(currentProduct.id, currentProduct))
      .then(response => {
        console.log(response);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const removeTutorial = () => {
    dispatch(deleteProducts(currentProduct.id))
      .then(() => {
        props.history.push("/products");
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
   <>
   <h2>Products page</h2>
   </>
  );
};
export default Products;