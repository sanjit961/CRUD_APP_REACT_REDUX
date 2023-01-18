import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/inventory";
import { Link } from "react-router-dom";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div>
        <h2 className="text-center">ADMIN PANEL</h2>
        <table className="table text-center">
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Update</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <>
                  <tr>
                    <td key={item.userId}>{item.firstName}</td>
                    <td key={item.userId}>{item.lastName}</td>
                    <td key={item.userId}>{item.emailAddress}</td>
                    <td key={item.userId}>{item.phoneNumber}</td>
                    <td>
                      <Link to={"/productlist/"+item.userId}>
                      <button className="btn btn-primary">UPDATE</button>
                      </Link>
                     
                    </td>
                    <td>
                      <button className="btn btn-danger">DELETE</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserList;
