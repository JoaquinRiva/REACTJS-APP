//Este es un objeto que representa el estado y muestra los productos por defecto
//Devuelve los productos predeterminados y un arreglo vacío "cart"
//que es nuestro  estado inicial para el carro de compras


export default {
  cart: [],
  products: [
    {
      id: 1,
      name: "Teclado hyperX",
      category:"Teclados",
      price: 6000,
      
    },
    {
      id: 2,
      name: "Auriculares Raze",
      category:"Audio",
      price: 3000,
      
    },
    {
      id: 3,
      name: "Gabinte Termalthake",
      category:"Pc",
      price: 5000,
      
    },
    {
      id: 4,
      name: "Monopoly Clásico",
      category:"Juegos de Mesa",
      price: 10990,
      
    }
  ]
}