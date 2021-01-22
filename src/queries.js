import firebase from './firebase'
import { v4 as uuidv4 } from 'uuid'

const db = firebase.firestore()

// discounts

export const getDiscounts = (discountGroup) => {
  let docRef = db.collection('discounts').doc(discountGroup)
  return docRef.get().then((doc) => doc.data())
}

// Products

export const getProducts = (productCategory) => {
  const products = []
  const docRef = db.collection('products').where('category', '==', productCategory).orderBy('id')
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



// export const addData = () => {
  
//   kek.map(el => {
//     const newId = uuidv4()
//     db.collection('products').doc(newId).set({...el, id: newId})
//   }) 
// }

