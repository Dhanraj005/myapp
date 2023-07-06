import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup";
 import * as yup from "yup"

 const schema = yup.object({
product:yup.string().required(),
 }

 )
function ProductsInput(props) {
   const{handleSubmit , register , formState:{error }} = useForm(
    {resolver: yupResolver(schema)}
   );
   console.log(error)

   const formSubmit = (data) => {
    console.log(data)
   }
  return (
    <div className="p-3 mb-3" onSubmit={handleSubmit(formSubmit)}>
      <div className="mb-4">Add Product</div>
      <div className="input-group pb-3">
        <input className="form-control" id="Product" type="text" onChange={props.handleObjectName} register= {{...register("username")}} />
      </div>
      <div className="input-group pb-3">
        <input type='number' className='form-control' id="Price" onChange={props.handlePriceObject} register= {{...register("username")}} />
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-dark " onClick={props.addObject}>Add Product</button>
      </div>
    </div>
  );
}

export default ProductsInput;
