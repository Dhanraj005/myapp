import React from "react";
import AddProduct from "./AddProduct";
import "./App.css";
import HeaderComponant from "./Componants/HeaderComponant";
import Navbar from "./Componants/Navbar";
import ProductsInput from "./Componants/ProductsInput";
import NameList from "./NameList";

function App() {
  const [listUser, setUser] = React.useState([
    {
      id: 1,
      Name: "Pradeep",
      city: "Mumbai",
      product: [
        {
          id: 1,
          productName: "Produst one",
          price: 500,
        },
      ],
    },
    {
      id: 2,
      Name: "Niranjan",
      city: "Pune",
      product: [
        {
          id: 1,
          productName: "product2",
          price: 1500,
        },
      ],
    },
    {
      id: 3,
      Name: "Yash",
      city: "pune",
      product: [
        {
          id: 1,
          productName: "product3",
          price: 2000,
        },
      ],
    },
    {
      id: 4,
      Name: "Krishna",
      city: "Nanded",
      product: [
        {
          id: 1,
          productName: "product4",
          price: 3000,
        },
      ],
    },
    {
      id: 5,
      Name: "Amit",
      city: "Nanded",
      product: [
        {
          id: 1,
          productName: "product5",
          Price: 3500,
        },
        {
          id: 2,
          productName: "product2",
          Price: 400,
        },
      ],
    },
    {
      id: 6,
      Name: "Amol",
      city: "Pune",
      product: [
        {
          id: 1,
          product: "product1",
          price: 500,
        },
        {
          id: 2,
          productName: "product2",
          price: 500,
        },
      ],
    },
    {
      id: 7,
      Name: "Nihar",
      city: "pune",
      product: [
        {
          id: 1,
          productName: "product1",
          price: 100,
        },
        {
          id: 2,
          productName: "product2",
          Price: 200,
        },
      ],
    },
    {
      id: 8,
      Name: "Harshal",
      city: "Pimpri",
      product: [
        {
          id: 1,
          productName: "product1",
          price: 300,
        },
        {
          id: 2,
          productName: "product2",
          price: 500,
        },
        {
          id: 3,
          productName: "product3",
          price: 400,
        },
      ],
    },

    {
      id: 9,
      Name: "Prasanjeet",
      city: "pune",

      product: [
        {
          id: 1,
          productName: "product1",
          price: 500,
        },
        {
          id: 2,
          productName: "product2",
          price: "500",
        },
      ],
    },
    {
      id: 10,
      Name: "Nitin",
      city: "Pune",
      product: [
        {
          id: 1,
          productName: "product1",
          price: 500,
        },
        {
          id: 2,
          productName: "product2",
          price: 499,
        },
      ],
    },
  ]);
  const [idUser, setidUser] = React.useState(0);

  const handelClick = (dataId) => {
    setidUser(dataId.currentTarget.id - 1);
  };

  const [objectName , setObjectName ] = React.useState('');
   const [PriceObject , setPriceObject] = React.useState('');
 
  

const addObjectName = (event) => {
setObjectName(event.target.value);
}
const addPriceObject = (event)=> {
  setPriceObject(event.target.value);

}
const [items , setItems] = React.useState(listUser[idUser].product);
  let count = listUser[idUser].product.length + 1 ;


  function addObject() {
    setItems(
      listUser[idUser].product.push({
     id: count,
     productName: objectName,
     price:PriceObject,

      }));
      count = listUser[idUser].product.length +1;

  }
      
  return (
    <div className="container text-start">
    <div className="flex ">
      <div className=" grid-col-3">
        <Navbar />
      </div>
      <div className=" grid-col-9">
        <HeaderComponant listUser={listUser} idUser={idUser}  />
      </div>
      </div>
      <div className="row">
        <div className="col-lg-4  py-2">
          <NameList listUser={listUser} handelClick={handelClick} />
        </div>
        <div className="col lg-8 p-3">
          <ProductsInput handleObjectName={addObjectName} handlePriceObject={addPriceObject} addObject={addObject} />
          <AddProduct listUser={listUser} idUser={idUser} items={items} />
        </div>
        

      </div>
    </div>
  );
}

export default App;
