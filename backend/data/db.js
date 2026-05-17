const categories = [
  { id: 1, name: "Tecnología" },
  { id: 2, name: "Hogar" },
  { id: 3, name: "Deportes" }
]

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "Laptop Lenovo",
    price: 900,
    imageUrl: "https://via.placeholder.com/150",
    categoryId: 1,
    stock: 5
  },
  {
    id: 2,
    name: "Mouse",
    description: "Mouse gamer",
    price: 25,
    imageUrl: "https://via.placeholder.com/150",
    categoryId: 1,
    stock: 10
  },
  {
    id: 3,
    name: "Balón",
    description: "Balón de fútbol",
    price: 30,
    imageUrl: "https://via.placeholder.com/150",
    categoryId: 3,
    stock: 7
  }
]

module.exports = {
  products,
  categories
}