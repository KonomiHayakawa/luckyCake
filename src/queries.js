import firebase from './firebase'
import { v4 as uuidv4 } from 'uuid'

const db = firebase.firestore()

export const getProducts = (productCategory) => {
  let docRef = db.collection('products').doc(productCategory)
  return docRef.get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data()
      } else {
        console.log('No such document!')
      } 
    })
    .catch(function(error) {
      console.log('Error getting document:', error)
    })
}

export const requestCallback = (formData) => {
  const requestId = uuidv4()
  return db.collection('callbackRequests').doc(requestId).set({
    name: formData.name,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
  })
}