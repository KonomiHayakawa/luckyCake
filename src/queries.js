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

export const getProducts = (productCategory, queryParameter) => {
  const products = []
  let query = db.collection('products')
  if (productCategory) {
    query = query.where('category', '==', productCategory)
  }
  if (queryParameter) {
    query = query.where(queryParameter, '==', 'true')
  }
  return query.orderBy('id').get().then((querySnaphot) => {
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