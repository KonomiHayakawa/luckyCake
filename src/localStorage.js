export const updateAddedProducts = (updatedAddedProducts) => {
  const productsMainData = updatedAddedProducts.map(el => ({id: el.id, amount: el.amount}))
  localStorage.setItem('addedProductsData', JSON.stringify(productsMainData))
}