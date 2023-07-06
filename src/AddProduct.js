import React from "react";

function AddProduct(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">product Name</th>
          <th scope="col"> Price</th>
        </tr>
      </thead>
      <tbody>
        {props.listUser[props.idUser].product.map((object) => (
          <tr>
            <th>{object.id}</th>
            <th>{object.productName}</th>
            <th>{object.price}</th>
          </tr>
        ))}
      </tbody>
      <tbody></tbody>
    </table>
  );
}

export default AddProduct;
