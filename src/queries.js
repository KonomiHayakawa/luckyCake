import firebase from './firebase'
import { v4 as uuidv4 } from 'uuid'

const db = firebase.firestore()

// discounts

export const getDiscounts = (period) => {
  const products = []
  const docRef = db.collection('discounts').where('period', '==', period).orderBy('id')
  return docRef.get().then((querySnaphot) => {
    querySnaphot.forEach((doc) => products.push(doc.data()))
  }).then(() => products)
}

// callBackPopUP

export const requestCallback = (formData) => {
  const requestId = uuidv4()
  return db.collection('callbackRequests').doc(requestId).set({
    name: formData.name,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
  })
}

// Products

export const getProductsByCategory = (productCategory) => {
  const products = []
  const docRef = db.collection('products').where('category', '==', productCategory).orderBy('id')
  return docRef.get().then((querySnaphot) => {
    querySnaphot.forEach((doc) => products.push(doc.data()))
  }).then(() => products)
}

export const getNewProducts = () => {
  const products = []
  const docRef = db.collection('products').where('isNew', '==', 'true').orderBy('id')
  return docRef.get().then((querySnaphot) => {
    querySnaphot.forEach((doc) => products.push(doc.data()))
  }).then(() => products)
}

export const getPersonalDesigns = () => {
  const products = []
  const docRef = db.collection('personalDesigns').orderBy('id')
  return docRef.get().then((querySnaphot) => {
    querySnaphot.forEach((doc) => products.push(doc.data()))
  }).then(() => products)
}

export const getAddedProducts = async () => {
  const products = []
  const addedProducts = JSON.parse(localStorage.getItem('addedProductsData')) || []
  for await (const product of addedProducts) {
    const docRef = db.collection('products').where('id', '==', product.id)
    await docRef.get()
      .then((querySnaphot) => {
      querySnaphot.forEach((doc) => products.push({...doc.data(), amount:product.amount}))
    })
  }
  return products
}

// order

export const sendOrder = (order) => {
  const orderId = uuidv4()
  return db.collection('orders').doc(orderId).set({...order})
}



// export const addData = () => {
//   kek.map(el => {
//     const newId = uuidv4()
//     db.collection('products').doc(newId).set({...el, id: newId})
//   }) 
// }