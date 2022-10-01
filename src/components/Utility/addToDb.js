const addToDb = (id) => {
  let shoppingCart = getToDb();
  // ! add a quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  // ! set the product in local storage
  localStorage.setItem("SHOPPING_CART", JSON.stringify(shoppingCart));
};
const getToDb = () => {
  let shoppingCart = {};
  // ! get the products from local storage
  const storedProduct = JSON.parse(localStorage.getItem("SHOPPING_CART"));
  if (storedProduct) {
    shoppingCart = storedProduct;
  }
  return shoppingCart;
};
export { addToDb, getToDb };
