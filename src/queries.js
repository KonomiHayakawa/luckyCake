import firebase from './firebase'

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