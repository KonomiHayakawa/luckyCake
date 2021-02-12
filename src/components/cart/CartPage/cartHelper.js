export const addProductItem = (addedProducts, newProduct) => {
  const isAlreadyAdded = addedProducts.find(product => product.id === newProduct.id)
  let addedProductsUpdated 
  if (isAlreadyAdded) {
    addedProductsUpdated = addedProducts.map(product => {
      return product.id === newProduct.id ? {...product, amount: product.amount += 1} : product
    })
  } else {
    addedProductsUpdated = [...addedProducts, {...newProduct, amount: 1}]
  }
  return addedProductsUpdated
}

export const calculateTotalCost = (addedProducts) => {
  if (addedProducts.length === 0) return 0

  const totalCostWithoutDiscount = addedProducts.reduce((sum, product) => {
    return sum += Number(product.price) * product.amount
  }, 0)

  const totalCost = addedProducts.reduce((sum, product) => {
    let price = product.newPrice || product.price
    return sum += Number(price) * product.amount
  }, 0)

  return ({totalCostWithoutDiscount, totalCost})
}

export const removeProductItem = (addedProducts, removedItem) => {
  const addedProductsUpdated = addedProducts.filter(product => {
    if (product.id === removedItem.id && removedItem.amount === 1) {
      return false
    } else if (product.id === removedItem.id) {
      return {...product, amount: product.amount -= 1}
    } else {
      return product
    }
  })
  return addedProductsUpdated
}