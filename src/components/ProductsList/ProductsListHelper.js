export const sortByPriceIncrease = (a, b) => {
  const aPrice = a.newPrice || a.price
  const bPrice = b.newPrice || b.price
  return aPrice - bPrice
}

export const sortByPriceDecrease = (a, b) => {
  const aPrice = a.newPrice || a.price
  const bPrice = b.newPrice || b.price
  return bPrice - aPrice
}

export const sortBySizeIncrease = (a, b) => {
  const aSize = a.weight || a.size
  const bSize = b.weight || b.size
  return aSize - bSize
}

export const sortBySizeDecrease = (a, b) => {
  const aSize = a.weight || a.size
  const bSize = b.weight || b.size
  return bSize - aSize
}