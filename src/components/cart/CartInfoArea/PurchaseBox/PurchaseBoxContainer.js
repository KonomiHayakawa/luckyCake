import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import PurchaseBox from './PurchaseBox'
import {setIsCartInfoBoxOpen} from './../../../../redux/cartReducer'

const PurchaseBoxContainer = (props) => {
  const history = useHistory() 

  useEffect(() => {
    return history.listen(() => { 
      props.setIsCartInfoBoxOpen(false)
    }) 
  }, [history, props]) 

  const purchasesAmount = props.addedProducts.reduce((sum, item) => {
    return sum += item.amount
  }, 0)
  
  return (
    <PurchaseBox 
      purchasesAmount={purchasesAmount}
      totalCost={props.totalCost}
    />
  )
}

const mapStateToProps = (state) => ({
  addedProducts: state.cartReducer.addedProducts,
  totalCost: state.cartReducer.totalCost,
})

export default connect(mapStateToProps, {setIsCartInfoBoxOpen})(PurchaseBoxContainer)