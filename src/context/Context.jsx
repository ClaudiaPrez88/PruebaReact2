
import React, { createContext, useState } from "react";
import pizzasData from "../data/pizzas.json";

export const ContextPizzas = createContext();

export const PizzasProvider = ({ children }) => {
  const [Pizzas, setPizzas] = useState(pizzasData);
  const [Carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (id) => {
    const pizzaExistente = Carrito.find((item) => item.id === id);

    if (pizzaExistente) {
      const nuevoCarrito = Carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(nuevoCarrito);
    } else {
      const pizza = Pizzas.find((pizza) => pizza.id === id);
      if (pizza) {
        setCarrito([...Carrito, { ...pizza, cantidad: 1 }]);
      }
    }
  };


  const agregarAlCarritoDetalle = (id, cantidad) => {
    const pizzaExistente = Carrito.find((item) => item.id === id);

    if (pizzaExistente) {
      const nuevoCarrito = Carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + cantidad } : item
      );
      setCarrito(nuevoCarrito);
    } else {
      const pizza = Pizzas.find((pizza) => pizza.id === id);
      if (pizza) {
        setCarrito([...Carrito, { ...pizza, cantidad }]);
      }
    }
  };

  const handleAgregarAlCarrito = (id) => {
    agregarAlCarrito(id, cantidad); 
    setCantidad(1); 
  };

  const aumentarCantidad = (id) => {
    const nuevoCarrito = Carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCarrito(nuevoCarrito);
  };

  const disminuirCantidad = (id) => {
    const nuevoCarrito = Carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
    ).filter((item) => item.cantidad > 0); 
    setCarrito(nuevoCarrito);
  };

  const eliminarPizzaDelCarrito = (id) => {
    const nuevoCarrito = Carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  const calcularTotalCarrito = () => {
    return Carrito.reduce((total, item) => total + item.price * item.cantidad, 0);
  };

  const calcularTotalCantidadCarrito = () => {
    return Carrito.reduce((totalCantidad, item) => totalCantidad + item.cantidad, 0);
  };

  return (
    <ContextPizzas.Provider
      value={{ Pizzas, Carrito,calcularTotalCantidadCarrito,agregarAlCarritoDetalle,handleAgregarAlCarrito, agregarAlCarrito, aumentarCantidad, disminuirCantidad, calcularTotalCarrito,eliminarPizzaDelCarrito }}
    >
      {children}
    </ContextPizzas.Provider>
  );
};
