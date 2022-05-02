import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GETFILTER } from "../../actions/index";
//import CardProduct from "./CARD.PRODUCT";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("tecnologia");
  const [order, setOrder] = useState("name");
  const [sort, setSort] = useState(1);

  
  const onChangeValue = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const onChangeOrder = (e: any) => {
    e.preventDefault();
    setOrder(e.terget.value);
  };

  const onChangeSort = (e: any) => {
    e.preventDefault();
    setSort(e.terget.value);
  };

  useEffect(() => {
    dispatch(GETFILTER({ name,value, order, sort}));
  }, [dispatch, name:any,value:any, order:any, sort:any]);

  return (
    <div>
      <select onChange={(e) => onChangeValue(e)}>
        <option value="name"> TODOS</option>
        <option value="ropa">MODA</option>
        <option value="tecnologia">TECNOLOGIA</option>
        <option value="deporte">DEPORTE</option>
        <option value="calzado">CALZADO</option>
      </select>

      <select onChange={(e) => onChangeOrder(e)}>
        <option value="price">PRECIO</option>
        <option value="stock">stock</option>
        <option value="review">review</option>
        <option value="rating">rating</option>
      </select>

      <select onChange={(e) => onChangeSort(e)}>
        <option value="-1">DESC</option>
        <option value="1">ASC</option>
      </select>

      {product.length === 0 ? (
        <p>"not product"</p>
      ) : (
        product.map((e:any) => {
          return (
            <div>
              <CardProduct
                name={e.name}
                price={e.price}
                stock={e.stock}
                imageProduct={e.imageProduct}
                review={e.review}
                rating={e.rating}
                id={e._id}
                envio={e.envio}
                rating={e.rating}
              />
            </div>
          );
        })
      )}
    </div>
  );
};